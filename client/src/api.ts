import axios from 'axios';
import { UsersResponseType } from './types/types';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'http://api.for-react-test1-app.ru/',
    headers: {
        'API-KEY': '51m08clumrscuku02pdmi1e8i4' // API-KEY - заголовок для авторизации - вставлять тот который приходит с ответом от - autorization/
    }
});

export const usersAPI = {
    getUsers(pageNumber = 1, usersCount = 3) {
        return instance.get<UsersResponseType>(`getusers/?countElem=${usersCount}&page=${pageNumber}`)
        .then(response => {
            return response.data;
        })
        .catch(e => { console.log(e) })
    },
    getPostCurrentUser(userID = 1) {
        return instance.get<UsersResponseType>(`get-post-current-user?id=${userID}`)
        .then(response => {
            return response.data;
        })
    }
}

//ResponseMainType
type ResponseMainType = {
    message: string
    status: number
}

//AutorizationType
type AutorizationValuesType = {
    login: string
    password: string
}
type UserType = {
    name: string
    email: string
    logo: string
    id: number
}
type AutorizationResponseType = ResponseMainType & {
    user?: Array<UserType>
}

//RegistrationType
type RegistrationValuesType = {
    full_name: string
    login: string
    email: string
    password: string
    password_confirm: string
}
type RegistrationResponseType = ResponseMainType & {
    login?: string
    full_name?: string
    email?: string
    pass?: string
}

//meResponseType 
type meResponseType = ResponseMainType & {
    login?: string
    user?: string
    logo?: string
}

export const authAPI = {
    goAutorization(authParams: AutorizationValuesType) {
        return instance.post<AutorizationResponseType>(`autorization/`, authParams)
        .then(response => {
            return response.data;
        }) 
    },
    goRegistration(authParams: RegistrationValuesType) {
        return instance.post<RegistrationResponseType>(`registration/`, authParams)
        .then(response => {
            return response.data;
        })
    },
    goLogout(login: string) {
        return instance.get<ResponseMainType>(`logout/?login=${login}`)
        .then(response => {
            return response.data;
        })
    },
    me() {
        return instance.get<meResponseType>(`me/`)
        .then(response => {
            return response.data;
        })
        .catch(e => { console.log(e) })
    }
}

export const followUnfollowAPI = {
    followOrUnfollow(userID: number) {
        return instance.post<ResponseMainType>(`follow-unfollow/`, userID)
        .then(response => {
            return response.data;
        }) 
    }
}

//StatusResponseType
type StatusType = {
    id: number
    status: string
}
type GetStatusResponseType = {
    items: Array<StatusType>
    totalCount: number
    errors: string | null
}

type SetStatusResponseType = GetStatusResponseType | ResponseMainType


export const profileAPI = {
    // get - получить стутс тукущего юзера
    getStatus(userId: number) {
        return instance.get<GetStatusResponseType>(`profile/status/get/${userId}`)
        .then(response => {
            return response.data;
        }) 
    },
    //залить новый cтатус на сервер, и вернуть обновленный  
    setStatus(status: string) {
        return instance.post<SetStatusResponseType>(`profile/status/set`, {status: status})
        .then(response => {
            return response.data;
        })
    },
    updatePhoto(photo: any) {
        console.log(photo);
        const formData = new FormData();
        formData.append("image", photo, photo.name);
        return instance.post(`profile/photo/set`, formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
        .then(response => {
            return response.data;
        })
    },
    setAboutMe(values: string) {
        return instance.post(`profile/set/AboutMe/`, values)
        .then(response => {
            return response.data;
        })
    }
}

export const musicAPI = {
    getMusic() {
        return instance.get(`music/`)
        .then(response => {
            return response.data;
        })
    },
    setLikeTkack(idTkack: number) {
        return instance.post(`likeTrack/`, idTkack)
        .then(response => {
            return response.data;
        })
    }
}
