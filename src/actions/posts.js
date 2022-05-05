import * as api from '../api'
import {CREATEPOST} from "../constants/actionTypes"


export const CreatePost = (newPost, nevigate) => async(dispatch) =>{
    try {
        const {data}  = await api.createPost(newPost);
        dispatch({type : CREATEPOST, payload : data})
        nevigate("/")
    } catch (error) {
        console.log(error);
    }
}