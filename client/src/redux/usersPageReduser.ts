import { followUnfollowAPI, usersAPI } from "../api";
import { UsersType } from "../types/types";

const SETUSERS = "SETUSERS";
const PAGES_COUNT = "PAGES_COUNT";
const USERS_COUNT = "USERS_COUNT";
const TOTAL_USERS_COUNT = "TOTAL_USERS_COUNT";
const CURRENT_PAGE = "CURRENT_PAGE";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_DISABLED = "TOGGLE_IS_DISABLED";
const FOLLOW_UNFOLLOW = "FOLLOW_UNFOLLOW";

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

const usersPageReduser = (state = defaultStateFromUsersPage, action: any): DefaultStateFromUsersPageType => {
    switch (action.type) {
        case SETUSERS:
            return {
                ...state, users: [...action.users]
            }
        case FOLLOW_UNFOLLOW: 
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.userId) {
                        return { ...u, follower: !u.follower }
                    }
                    return u;
                })
            }
        case PAGES_COUNT:
            return {
                ...state, pagesCount: action.pagesCount
            }
        case USERS_COUNT:
            return {
                ...state, usersCount: action.usersCount
            }
        case TOTAL_USERS_COUNT:
            return {
                ...state, totalUsersCount: action.totalUsersCount
            }
        case CURRENT_PAGE:
            return {
                ...state, currentPage: action.currentPage
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state, isFetching: action.isFetching
            }
        case TOGGLE_IS_DISABLED:
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

export type FollowUnfollowType = { type: typeof FOLLOW_UNFOLLOW, userId: number }
export const followUnfollow = (userId: number): FollowUnfollowType => { return { type: FOLLOW_UNFOLLOW, userId } }

export type SetUsersACType = { type: typeof SETUSERS, users: Array<UsersType> }
export const setUsersAC = (users: Array<UsersType>): SetUsersACType => { return { type: SETUSERS, users: users } }

export type SetPagesCountACType = { type: typeof PAGES_COUNT, pagesCount: number }
export const setPagesCountAC = (pagesCount: number): SetPagesCountACType => { return { type: PAGES_COUNT, pagesCount: pagesCount } }

export type SetUsersCountACType = { type: typeof USERS_COUNT, usersCount: number }
export const setUsersCountAC = (usersCount: number): SetUsersCountACType => { return { type: USERS_COUNT, usersCount: usersCount } }

export type SetTotalUsersCountACType = { type: typeof TOTAL_USERS_COUNT, totalUsersCount: number }
export const setTotalUsersCountAC = (totalUsersCount: number): SetTotalUsersCountACType => { return { type: TOTAL_USERS_COUNT, totalUsersCount: totalUsersCount } }

export type SetСurrentPageACType = { type: typeof CURRENT_PAGE, currentPage: number }
export const setСurrentPageAC = (currentPage: number): SetСurrentPageACType => { return { type: CURRENT_PAGE, currentPage: currentPage } }

export type ToggleIsFetchingACType = { type: typeof TOGGLE_IS_FETCHING, isFetching: boolean }
export const toggleIsFetchingAC = (isFetching: boolean): ToggleIsFetchingACType => { return { type: TOGGLE_IS_FETCHING, isFetching: isFetching } }

export type ToggleIsDisabledACType = { type: typeof TOGGLE_IS_DISABLED, isDisabled: boolean, userId: number }
export const toggleIsDisabledAC = (isDisabled: boolean, userId: number): ToggleIsDisabledACType => { return { type: TOGGLE_IS_DISABLED, isDisabled, userId } }

export const getUsersTC = (pageNumber: number, usersCount?: number) => {
    return (dispatch: any) => {
        dispatch(toggleIsFetchingAC(true));
        usersAPI.getUsers(pageNumber, usersCount)
        .then((response: any) => {
            dispatch(setСurrentPageAC(pageNumber));
            dispatch(setUsersAC(response.items));
            dispatch(setTotalUsersCountAC(response.totalCount));
            dispatch(toggleIsFetchingAC(false));
        }, (err: any) => Promise.reject(err)) 
    }
}

export const followUnfollowTC = (userId: number) => {
    return (dispatch: any) => {
        dispatch(toggleIsDisabledAC(true, userId));
        followUnfollowAPI.followOrUnfollow(userId)
        .then((response: any) => {
            if (response.status === 1) {
                dispatch(followUnfollow(userId));
            }
            dispatch(toggleIsDisabledAC(false, userId));
        }, (err: any) => Promise.reject(err))   
    }

}

export default usersPageReduser;
