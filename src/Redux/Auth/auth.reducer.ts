import { User } from "../../utils/types";
import { Temp } from "../Products/product.reducer";
import * as types from "./auth.types";

export interface IAuthState {
    currentUser?: User | null,
    isLoading:boolean,
    isAuth: boolean,
    users:User[],
    isError:boolean
}
const init:IAuthState={
    // @ts-ignore
    currentUser: JSON.parse(localStorage.getItem("user"))||{},
    
    isLoading:false,
    isAuth:localStorage.getItem("user")? true:false,
    users:[],
    isError:false
}

export const reducer = (state:IAuthState=init,{type,payload}:Temp)=>{
 switch(type){
    case types.AUTH_LOAD:
        return {...state,isLoading:true}
    case types.AUTH_SUCCESS:
        return {...state,isLoading:false,isAuth:true,currentUser:payload}
    case types.POST_AUTH_SUCCESS:
            return {...state,isLoading:false,users:payload} 
    case types.AUTH_ERROR:
        return {...state,isError:true,isLoading:false}
    case types.AUTH_LOGOUT:
            return {...state,isAuth:false,currentUser:{}}
    case types.SET_CUR_NAME:
            return {...state,currentUserName:payload}
    default:
        return state;
 }

}
