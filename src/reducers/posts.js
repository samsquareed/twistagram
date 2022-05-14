import {COMMENT, CREATEPOST, DELETE, FETCH_ALL, LIKE, UNLIKE, USERSALLPOSTS} from "../constants/actionTypes"

//since this reducer is particularly used to deal with posts 
// hence we will define it as posts itself instead of state= []

const postReducer = (posts = [], action) => {
    switch (action.type) {
        case CREATEPOST:
            return [...posts, action?.payload].reverse()
        case FETCH_ALL :
            return [...action?.payload].reverse()
        case USERSALLPOSTS :
            return [...action?.payload].reverse()
        case DELETE :
            return posts.filter((post)=> post._id !== action.payload);
        case LIKE :
        case UNLIKE :
        case COMMENT:
            return posts.map((post)=> (post._id === action.payload._id ? action.payload : post));
        default:
            return posts;
    }
}

export default postReducer