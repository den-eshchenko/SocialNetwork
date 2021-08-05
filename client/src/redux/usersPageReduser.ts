import { followUnfollowAPI, usersAPI } from "../api";
import { UsersType } from "../types/types";
import { ActionsType } from "./reduxStore";

let defaultStateFromUsersPage = {
    users: [] as Array<UsersType>,
    pagesCount: 5 as number | null, // количество страниц totalUsersCount/usersCount
    usersCount: 3 as number | null, // количество отображаемых пользователей на странице
    totalUsersCount: 20 as number | null, // всего сколько пользователей users.totalCount - с сервера
    currentPage: 1 as number | null, // текущая страница
    isFetching: false as boolean, // есть ли загрузка
    isDisabled: [] as Array<number>, // массив с id блокируемых кнопок
}

type DefaultStateFromUsersPageType = typeof defaultStateFromUsersPage

const usersPageReduser = (state = defaultStateFromUsersPage, action: ActionsUsersType): DefaultStateFromUsersPageType => {
    switch (action.type) {
        case 'SETUSERS':
            return {
                ...state, users: [...action.users]
            }
        case 'FOLLOW_UNFOLLOW': 
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.userId) {
                        return { ...u, follower: !u.follower }
                    }
                    return u;
                })
            }
        case 'PAGES_COUNT':
            return {
                ...state, pagesCount: action.pagesCount
            }
        case 'USERS_COUNT':
            return {
                ...state, usersCount: action.usersCount
            }
        case 'TOTAL_USERS_COUNT':
            return {
                ...state, totalUsersCount: action.totalUsersCount
            }
        case 'CURRENT_PAGE':
            return {
                ...state, currentPage: action.currentPage
            }
        case 'TOGGLE_IS_FETCHING':
            return {
                ...state, isFetching: action.isFetching
            }
        case 'TOGGLE_IS_DISABLED':
            return {
                ...state,
                isDisabled: action.isDisabled ?
                    [...state.isDisabled, action.userId] :
                    state.isDisabled.filter(id => id !== action.userId)
            }
        default:
            return state;
    }
}

export type ActionsUsersType = ActionsType<typeof actionsUsers>

export const actionsUsers = {
    followUnfollow: (userId: number) => ({ type: 'FOLLOW_UNFOLLOW', userId } as const),
    setUsersAC: (users: Array<UsersType>) => { return { type: 'SETUSERS', users: users } as const},
    setPagesCountAC: (pagesCount: number) => { return { type: 'PAGES_COUNT', pagesCount: pagesCount } as const},
    setUsersCountAC: (usersCount: number) => { return { type: 'USERS_COUNT', usersCount: usersCount } as const},
    setTotalUsersCountAC: (totalUsersCount: number) => { return { type: 'TOTAL_USERS_COUNT', totalUsersCount: totalUsersCount } as const},
    setСurrentPageAC: (currentPage: number) => { return { type: 'CURRENT_PAGE', currentPage: currentPage } as const},
    toggleIsFetchingAC: (isFetching: boolean) => { return { type: 'TOGGLE_IS_FETCHING', isFetching: isFetching } as const},
    toggleIsDisabledAC: (isDisabled: boolean, userId: number) => { return { type: 'TOGGLE_IS_DISABLED', isDisabled, userId } as const}   
}

export const getUsersTC = (pageNumber: number, usersCount?: number) => {
    return (dispatch: any) => {
        dispatch(actionsUsers.toggleIsFetchingAC(true));
        usersAPI.getUsers(pageNumber, usersCount)
        .then((response: any) => {
            dispatch(actionsUsers.setСurrentPageAC(pageNumber));
            dispatch(actionsUsers.setUsersAC(response.items));
            dispatch(actionsUsers.setTotalUsersCountAC(response.totalCount));
            dispatch(actionsUsers.toggleIsFetchingAC(false));
        }, (err: any) => Promise.reject(err)) 
    }
}

export const followUnfollowTC = (userId: number) => {
    return (dispatch: any) => {
        dispatch(actionsUsers.toggleIsDisabledAC(true, userId));
        followUnfollowAPI.followOrUnfollow(userId)
        .then((response: any) => {
            if (response.status === 1) {
                dispatch(actionsUsers.followUnfollow(userId));
            }
            dispatch(actionsUsers.toggleIsDisabledAC(false, userId));
        }, (err: any) => Promise.reject(err))   
    }

}

export default usersPageReduser;
