import {CREATEPOST, FETCH_ALL, USERSALLPOSTS} from "../constants/actionTypes"

//since this reducer is particularly used to deal with posts 
// hence we will define it as posts itself instead of state= []

const postReducer = (posts = [], action) => {
    switch (action.type) {
        case CREATEPOST:
            return [...posts, action?.payload]
        case FETCH_ALL :
            return action?.payload
        case USERSALLPOSTS :
            return action?.payload
        default:
            return posts;
    }
}

export default postReducer