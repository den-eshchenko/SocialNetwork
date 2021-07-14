import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'http://api.for-react-test1-app.ru/',
    headers: {
        'API-KEY': '51m08clumrscuku02pdmi1e8i4' // API-KEY - заголовок для авторизации - вставлять тот который приходит с ответом от - autorization/
    }
});

export const usersAPI = {
    getUsers(pageNumber = 1, usersCount = 3) {
        return instance.get(`getusers/?countElem=${usersCount}&page=${pageNumber}`)
        .then(response => {
            return response.data;
        })
        .catch(e => { console.log(e) })
    },
    getPostCurrentUser(userID = 1) {
        return instance.get(`get-post-current-user?id=${userID}`)
        .then(response => {
            return response.data;
        })
    }
}

export const authAPI = {
    goAutorization(authParams) {
        return instance.post(`autorization/`, authParams)
        .then(response => {
            return response.data;
        }) 
    },
    goRegistration(authParams) {
        return instance.post(`registration/`, authParams)
        .then(response => {
            return response.data;
        })
    },
    goLogout(login) {
        return instance.get(`logout/?login=${login}`)
        .then(response => {
            return response.data;
        })
    },
    me() {
        return instance.get(`me/`)
        .then(response => {
            return response.data;
        })
        .catch(e => { console.log(e) })
    }
}

export const followUnfollowAPI = {
    followOrUnfollow(userID) {
        return instance.post(`follow-unfollow/`, userID)
        .then(response => {
            return response.data;
        }) 
    }
}

export const profileAPI = {
    // get - получить стутс тукущего юзера
    getStatus(userId) {
        return instance.get(`profile/status/get/${userId}`)
        .then(response => {
            return response.data;
        }) 
    },
    //залить новый cтатус на сервер, и вернуть обновленный  
    setStatus(status) {
        return instance.post(`profile/status/set`, {status: status})
        .then(response => {
            return response.data;
        })
    },
    updatePhoto(photo) {
        let formData = new FormData();
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
    setAboutMe(values) {
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
    setLikeTkack(idTkack) {
        return instance.post(`likeTrack/`, idTkack)
        .then(response => {
            return response.data;
        })
    }
}
