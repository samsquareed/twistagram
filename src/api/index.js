import Axios from "axios";

// const API =  Axios.create({baseURL : 'http://localhost:8080'});
const API = Axios.create({baseURL : 'https://twistagrams.herokuapp.com'});

//auth api's
export const signIn = (formData) => API.post('/auth/signin', formData);
export const signUp = (formData) => API.post('/auth/signup', formData);


//post api's
export const createPost = (newPost) => API.post('/post/createpost', newPost);
export const getAllPosts = () => API.get('/post/all');
export const getCurrentUsersAllPosts = (id) => API.get(`/post/user/${id}`)