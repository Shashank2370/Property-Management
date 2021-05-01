import axios from 'axios';

const API = axios.create({baseURL :'http://localhost:8000/user/post'}) 

API.interceptors.request.use(req => {
    if (localStorage.getItem("profile")) {
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem("profile")).token}`
    }

    return req;
})

export const addPost = (id,formdata) => API.post(`/addPost/${id}`,formdata)
export const getPosts = (id) => API.get(`/getPosts/${id}`)
export const getAllposts = () => API.get('/getAllposts')
export const deletePost = (id) => API.delete(`/deletePost/${id}`)
