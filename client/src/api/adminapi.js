import axios from 'axios';

const API = axios.create({baseURL:'https://property-management-sap.herokuapp.com/admin'}); 

API.interceptors.request.use(req => {
    if (localStorage.getItem("profile")) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem("profile")).token}`
    }

    return req;
})

export const adminLogin = (formdata) => API.post("/adminLogin",formdata);
export const addAdmin = (formdata) => API.post("/addAdmin",formdata);
export const addUser = (formdata) => API.post("/addUser",formdata);
export const showUsers = () => API.get('/showUsers');