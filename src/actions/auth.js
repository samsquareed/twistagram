import {LOGIN} from "../constants/actionTypes"
import * as api from '../api'

export const SignIn = (formData, nevigate)=> async (dispatch)=>{
    try {
        const {data} = await api.signIn(formData)
        dispatch({type : LOGIN, payload : data})
        nevigate("/")
    } catch (error) {
        console.log(error);
    }
}

export const SignUp = (formData, nevigate)=> async (dispatch)=>{
    try {
        const {data} = await api.signUp(formData);
        nevigate("/login")
    } catch (error) {
        console.log(error);
    }
}