import * as api from '../api'
import {CREATEPOST, FETCH_ALL, USERSALLPOSTS} from "../constants/actionTypes"


export const CreatePost = (newPost, nevigate) => async(dispatch) =>{
    try {
        const {data}  = await api.createPost(newPost);
        dispatch({type : CREATEPOST, payload : data})
        nevigate("/")
    } catch (error) {
        console.log(error);
    }
}

export const GetAllPosts = () => async(dispatch) => {
    try {
        const {data} = await api.getAllPosts()
        const action = {type : FETCH_ALL , payload : data}
        dispatch(action)
    } catch (error) {
        console.log(error);
    }
}

export const userPostsForProfilePage = (id) => async(dispatch) => {
    try {
        const {data} = await api.getCurrentUsersAllPosts(id);
        dispatch({type : USERSALLPOSTS, payload : data})
    } catch (error) {
        console.log(error);
    }
}