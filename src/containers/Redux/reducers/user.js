import {userType} from '../types'

const initialState = {
    signup:{},
    signin:{}
}


const userReducer = (state=initialState,action) =>{
   switch(action.type){
       case userType.SIGNUP_USER:{
          return {...state, signup:action.payload}
       }
       
       case userType.SIGNIN_USER:{
           return {...state, signin:action.payload}
       }

       default:
           return state
   }
}

export default userReducer