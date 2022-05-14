import * as api from '../api'
import {COMMENT, CREATEPOST, DELETE, FETCH_ALL, LIKE, UNLIKE, USERSALLPOSTS} from "../constants/actionTypes"


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

export const deletePost = (postid) => async(dispatch) => {
    try {
        await api.deletePostById(postid)
        dispatch({type : DELETE, payload : postid})
    } catch (error) {
        console.log(error);
    }
}

export const LikePost = (postid) => async(dispatch) =>{
    try {
        const {data} = await api.likePost(postid)
        dispatch({type : LIKE, payload : data})
    } catch (error) {
        console.log(error);
    }
}

export const UnLikePost = (postid) => async(dispatch) =>{
    try {
        const {data} = await api.unLikePost(postid)
        dispatch({type : UNLIKE, payload : data})
    } catch (error) {
        console.log(error);
    }
}

export const CommentPost = (postid, comment) => async(dispatch)=>{
    try {
        const {data} = await api.commentPost(postid, comment)
        // console.log(data);
        dispatch({type : COMMENT, payload : data})
    } catch (error) {
        console.log(error);
    }
}