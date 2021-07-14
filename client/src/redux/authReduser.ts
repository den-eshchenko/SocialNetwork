import { stopSubmit } from "redux-form";
import { authAPI } from "../api";

const IS_AUTH = "IS_AUTH";
const LOGO_USER = "LOGO_USER";

let defaultStateAuthReduser = {
    full_name: null as string | null,
    login: null as string | null,
    email: null as string | null,
    password: null as string | null,
    password_confirm: null as string | null,
    logo_user: null as string | null,
    // isAuth: [false, readCookie('user'), null] as [boolean, string, number | null]// авториован или нет, меняется на false если не авторизован или нет куки, имя, id
    isAuth: [false, "guest", null] as [boolean, string, number | null]
}

type DefaultStateAuthReduserType = typeof defaultStateAuthReduser


const authReduser = (state = defaultStateAuthReduser, action: any): DefaultStateAuthReduserType => {
    switch (action.type) {
        case IS_AUTH:
            return {
                ...state, isAuth: [action.isAuth, action.login, action.user]
            }
        case LOGO_USER:
            return {
                ...state, logo_user: action.logo
            }
        default:
            return state;
    }
}

export type IsAuthdACType = {
    type: typeof IS_AUTH
    isAuth: boolean
    login: string 
    user?: number | null
};
export const isAuthdAC = (isAuth: boolean, login: string, user?: number | null): IsAuthdACType =>  {return { type: IS_AUTH, isAuth, login, user}};

export type LogoUserACType = {
    type: typeof LOGO_USER
    logo: string | null
};
export const logoUserAC = (logo: string | null): LogoUserACType =>  {return { type: LOGO_USER, logo }};

export const onRegistrationTС = (auth: any) => {
    return (dispatch: any) => {
        authAPI.goRegistration(auth)
          .then((response: any) => {
            console.log(response);
            alert(response.message);
          }, (err: any) => Promise.reject(err))
    }
}
export const onAutorizationTС = (auth: any) => {
    return (dispatch: any) => {
        authAPI.goAutorization(auth)
          .then((response: any) => {
            if(response.status === 1){
                alert(response.message);
                let date: any = new Date(Date.now() + (3600*1000));
                date = date.toUTCString();
                document.cookie = `user = ${response.user.name}; expires = ${date}; path = /;`;
                dispatch(isAuthdAC(true, response.user.name, +response.user.id));
                dispatch(logoUserAC(response.user.logo));
            } else {
                dispatch(stopSubmit('login', {_error: response.message}));
            }
            
          }, (err: any) => Promise.reject(err))
    }
}
export const onLogoutTС = (login: any) => {
    return (dispatch: any) => {
        authAPI.goLogout(login)
          .then((response: any) => {
            console.log(response);
            alert(response.message);
            dispatch(isAuthdAC(false, 'guset', null));
            dispatch(logoUserAC(null));
            document.cookie = `user = guest; expires = 1; path = /;`;
          }, (err: any) => Promise.reject(err))
    }
}

export const meTC = () => {
    return (dispatch: any) => {
        authAPI.me()
            .then((response: any) => {
                console.log(response);
                if (response.status === 1) {
                    dispatch(isAuthdAC(true, response.login, response.user));
                    dispatch(logoUserAC(response.logo));
                    let date: any = new Date(Date.now() + (3600 * 1000)); // на час 
                    date = date.toUTCString();
                    document.cookie = `user = ${response.login}; expires = ${date}; path = /;`;
                }
            }, (err: any) => Promise.reject(err))
    }
}

// function readCookie(name: string): string {
// 	let name_cook: string = name+"=";
// 	let spl: Array<string> = document.cookie.split(";");

// 	for(let i = 0; i < spl.length; i++) {
// 		let c: string = spl[i];
// 		while(c.charAt(0) === " ") {
// 			c = c.substring(1, c.length);
// 		}
// 		if(c.indexOf(name_cook) === 0) {
// 			return c.substring(name_cook.length, c.length);
// 		}	
// 	}
// 	return "guest";	
// }
export default authReduser;
