import axios from 'axios';

const API = axios.create({baseURL:'http://localhost:8000/user'})

API.interceptors.request.use(req => {
    if (localStorage.getItem("profile")) {
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem("profile")).token}`
    }

    return req;
})

export const userLogin = (formdata) => API.post('/userLogin',formdata)
export const updateUser = (id,formdata) => API.patch(`/updateUser/${id}`,formdata)
export const updateUserPassword = (id,formdata) => API.patch(`/updateUserPassword/${id}`,formdata)
export const verifyUser = (formdata) => API.post('/verifyUser',formdata)
export const addPost = (formdata) => API.post('/addPost',formdata)
export const userDelete = (id) => API.delete(`/userDelete/${id}`)