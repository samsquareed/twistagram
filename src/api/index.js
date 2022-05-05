import Axios from "axios";

const API =  Axios.create({baseURL : 'http://localhost:8080'});


//auth api's
export const signIn = (formData) => API.post('/auth/signin', formData);
export const signUp = (formData) => API.post('/auth/signup', formData);


//post api's
export const createPost = (newPost) => API.post('/post/createpost', newPost);