import axios from "axios"
import { FETCH_USER_FAILURE, FETCH_USER_REQUEST, FETCH_USER_SUCCESS } from "./usertypes"

export const fetchUserRequest =()=>{
    return{
        type: FETCH_USER_REQUEST,
    }
}

export const fetchUserSuccess =(users:any)=>{
    return{
        type: FETCH_USER_SUCCESS,
        payload:users
    }
}
export const fetchUserFailure =(error:any)=>{
    return{
        type: FETCH_USER_FAILURE,
        payload:error
    }
}

export const fetchUser=()=>{
    return function(dispatch:any){
        dispatch(fetchUserRequest)
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(response=>{ 
           const users= response.data;
           dispatch(fetchUserSuccess(users))
        })
        .catch(error=>{
            dispatch(fetchUserFailure(error.message))
        })
    }
}