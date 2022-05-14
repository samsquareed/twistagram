import {FETCHOTHERSPOSTS, FOLLOW, UNFOLLOW, GETOTHERUSER} from "../constants/actionTypes"
import * as api from '../api'

export const GetOtherUser = (id) => async(dispatch) =>{
    try {
        const {data} = await api.getOtherUser(id)
        dispatch({type : GETOTHERUSER, payload : data})
    } catch (error) {
        console.log(error);
    }
}



export const otherUserPostsForProfilePage = (id) => async(dispatch) => {
    try {
        const {data} = await api.getOtherUserAllPosts(id);
        dispatch({type : FETCHOTHERSPOSTS, payload : data})
    } catch (error) {
        console.log(error);
    }
}


export const FollowUser = (id) => async(dispatch) =>{
    try {
        const {data} = await api.followUser(id);
        console.log(data);
        dispatch({type: FOLLOW, payload : data})
    } catch (error) {
        console.log(error);
    }
}

export const UnFollowUser =(id) => async(dispatch) =>{
    try {
        const {data} = await api.unFollowUser(id);
        console.log(data);
        dispatch({type: UNFOLLOW, payload : data})
    } catch (error) {
        console.log(error);
    }
}