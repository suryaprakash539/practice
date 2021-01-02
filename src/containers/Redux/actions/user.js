import {userType} from '../types'

export const signUp = (data) =>{
    return {
        type:userType.SIGNUP_USER,
        payload:data
    }
}


export const signIn = (data) =>{
    localStorage.setItem('token',data.email)
    return {
        type:userType.SIGNIN_USER,
        payload:data
    }
}


export const logout = () =>{

}

