import { DefaultStateAuthReduserType } from "../types/types";
import { meTC } from "./authReduser";
import { getMusicTC } from "./musicReduser";
import { getUsersTC } from "./usersPageReduser";

const IS_SUCSESS = "IS_SUCSESS";

type InitializationSucsessACType = {
    type: typeof IS_SUCSESS  
}

let defaultStateAuthReduser: DefaultStateAuthReduserType = {
    isSucsess: false
}

const appReduser = (state = defaultStateAuthReduser, action: InitializationSucsessACType): DefaultStateAuthReduserType => {
    switch (action.type) {
        case IS_SUCSESS:
            return {
                ...state, isSucsess: true
            }
        default:
            return state;
    }
}

export const initializationSucsessAC = (): InitializationSucsessACType => { return { type: IS_SUCSESS } };

export const isInitializationSucsessTC = () => {
    return (dispatch: any) => {
        Promise.all([
            dispatch(meTC()), 
            dispatch(getUsersTC(1)), 
            dispatch(getMusicTC()) 
        ]).then(response => {
            dispatch(initializationSucsessAC());
        }, err => Promise.reject(err))
    }

}

export default appReduser;
