import { profileAPI, usersAPI } from "../api";
import { PostDataType } from "../types/types";

const ADD_POST = "ADD-POST";
const SET_CURRENT_USER = "SET_CURRENT_USER";
const SET_STATUS = "SET_STATUS";
const DELETE_POST = "DELETE_POST";
const SET_UPDATE_PHOTO = "SET_UPDATE_PHOTO";
const IS_FETCHING = "IS_FETCHING";

let defaultStateFromProffilePage = {
    postData: [
        { id: 1, title: 'Название первого поста', message: 'Cupiditate hic, odit nostrum perferendis praesentium fuga veritatis maiores doloribus esse autem sed doloremque, aspernatur unde illo beatae accusantium? Eaque, eos maxime!', likesCount: 5 },
        { id: 2, title: 'Название второго поста', message: 'Veritatis maiores doloribus esse autem sed doloremque, aspernatur unde illo beatae accusantium? Eaque, eos maxime!', likesCount: 88 },
        { id: 3, title: 'Название третьего поста', message: 'Veritatis maiores doloribus esse autem sed doloremque, aspernatur unde illo beatae accusantium? Eaque, eos maxime!', likesCount: 671 }
    ] as Array<PostDataType>,
    postCurrentText: 'Введите текст поста' as string,
    currentUser: '' as string,
    status: '' as string,
    photo: null as string | null,
    isFetching: false as boolean
}

type DefaultStateFromProffilePageType = typeof defaultStateFromProffilePage

const proffilePageReduser = (state = defaultStateFromProffilePage, action: any): DefaultStateFromProffilePageType => { 
    switch (action.type) {
        case ADD_POST:
            return {
                ...state, 
                postData: [...state.postData, { id: 5, title: '', message: action.formData, likesCount: 0 }], 
                postCurrentText: ''
            }; 
        case SET_CURRENT_USER: {
            return {
                ...state,
                currentUser: JSON.parse(JSON.stringify(action.currentUser))
            };
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            };
        }
        case DELETE_POST: {
            return {
                ...state,
                postData: state.postData.filter(p => p.id !== action.postId)
            };
        }
        case SET_UPDATE_PHOTO: {
            return {
                ...state,
                photo: action.photo
            };
        }
        case IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            };
        }
        default:
            return state;
    }
}

export type AddPostACType = { type: typeof ADD_POST, formData: PostDataType }
export const addPostActionCreator = (formData: PostDataType): AddPostACType => ({ type: ADD_POST, formData })

export type SetCurrentUserACType = { type: typeof SET_CURRENT_USER, currentUser: any }
export const setCurrentUserAC = (currentUser: any): SetCurrentUserACType => { return { type: SET_CURRENT_USER, currentUser: currentUser } }

export type SetStatusACType = { type: typeof SET_STATUS, status: string }
export const setStatusAC = (status: string): SetStatusACType => { return { type: SET_STATUS, status } }

export type DeletePostACType = { type: typeof DELETE_POST, postId: number }
export const deletePostAC = (postId: number): DeletePostACType => { return { type: DELETE_POST, postId } }

export type SetPhotoACType = { type: typeof SET_UPDATE_PHOTO, photo: string }
export const setPhotoAC = (photo: string): SetPhotoACType => { return { type: SET_UPDATE_PHOTO, photo } }

export type IsFetchingACType = { type: typeof IS_FETCHING, isFetching: boolean }
export const isFetchingAC = (isFetching: boolean): IsFetchingACType => { return { type: IS_FETCHING, isFetching } }

export const setCurrentUserTС = (userId: number) => {
    return (dispatch: any) => {
        usersAPI.getPostCurrentUser(userId)
            .then((response: any) => {
                dispatch(setCurrentUserAC(response.items));
            }, (err: any) => Promise.reject(err))
    }
}
export const setStatusTС = (userId: number) => {
    return (dispatch: any) => {
        profileAPI.getStatus(userId)
            .then((response: any) => {
                dispatch(setStatusAC(response.items[0].status));
            }, (err: any) => Promise.reject(err))
    }
}
export const savePhotoTC = (photo: string) => {
    return (dispatch: any) => {
        dispatch(isFetchingAC(true));
        profileAPI.updatePhoto(photo)
            .then((response: any) => {
                dispatch(setPhotoAC(response.photo));
                dispatch(isFetchingAC(false));
            }, (err: any) => Promise.reject(err))
    }
}
export const changeStatusUserTC = (status: string) => {
    return (dispatch: any) => {
        profileAPI.setStatus(status)
            .then((response: any) => {
                dispatch(setStatusAC(response.items[0].status));
            }, (err: any) => Promise.reject(err))
    }
}
export const onChangeAboutMeTC = (values: any) => {
    return (dispatch: any) => {
        profileAPI.setAboutMe(values)
            .then((response: any) => {
                console.log(response);
                dispatch(setCurrentUserTС(response.id));
            }, (err: any) => Promise.reject(err))
    }
}

export default proffilePageReduser;