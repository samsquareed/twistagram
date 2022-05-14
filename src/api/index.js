import Axios from "axios";

// const API =  Axios.create({baseURL : 'http://localhost:8080'});
const API = Axios.create({baseURL : 'https://twistagrams.herokuapp.com'});

API.interceptors.request.use((req) => {
    if (localStorage.getItem('user')) {
      req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('user')).token}`;
    }
  
    return req;
  });

//auth api's
export const signIn = (formData) => API.post('/auth/signin', formData);
export const signUp = (formData) => API.post('/auth/signup', formData);


//post api's
export const createPost = (newPost) => API.post('/post/createpost', newPost);
export const getAllPosts = () => API.get('/post/all');
export const getCurrentUsersAllPosts = (id) => API.get(`/post/user/${id}`)
export const deletePostById = (postid) => API.delete(`/post/delete/${postid}`) 
export const likePost = (postid) => API.patch(`/post/like/${postid}`)
export const unLikePost = (postid) => API.patch(`/post/unlike/${postid}`)
export const commentPost = (postid, comment) => API.patch(`/post/comment/${postid}`, comment)

//other user's services

export const getOtherUser = (id) => API.get(`/user/${id}`)
export const getOtherUserAllPosts = (id) => API.get(`/post/user/${id}`)


//logged in user services :
// export const followUser = (id, currid) => API.patch(`/user/follow/${id}/${currid}`)
// export const unFollowUser = (id, currid) => API.patch(`/user/unfollow/${id}/${currid}`)
export const followUser = (id) => API.patch(`/user/follow/${id}`)
export const unFollowUser = (id) => API.patch(`/user/unfollow/${id}`)