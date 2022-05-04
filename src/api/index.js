import Axios from "axios";

const API =  Axios.create({baseURL : 'http://localhost:8080'});



export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);