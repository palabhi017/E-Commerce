import { User } from "../../utils/types"
import { AppDispatch } from "../store"
import { getAuth } from "./auth.api"
import * as types from "./auth.types"


export const postUserData = (UserData:User) => async(dispatch:AppDispatch)=>{

dispatch({
    type: types.AUTH_LOAD,
    payload: undefined
})
try {
    let data = await getAuth(UserData)
   if(data){

       dispatch({type:types.POST_AUTH_SUCCESS,payload:data})
   }
} catch (error) {
    dispatch({
        type: types.AUTH_ERROR,
        payload: undefined
    })
}
}
