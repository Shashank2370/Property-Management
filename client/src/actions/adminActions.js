import * as api from "../api/adminapi.js";

export const adminLogin = (formdata,history) => async (dispatch) =>{

    try {
        const {data} = await api.adminLogin(formdata)

        dispatch({type:"LOGIN",data})

        if (data?.message)
            alert(data.message);
        else
            history.push("/admin/showAdmin");

    } catch (error) {
        console.log(error.message);
    }
    
}

export const adminLogout = (history) => async (dispatch) =>{
    try {
        dispatch({type:"LOGOUT"})
        history.push("/");
        
    } catch (error) {
        console.log(error.message);
    }
}

export const addAdmin = (formdata) => async (dispatch) => {

    try {
        const {data} = await api.addAdmin(formdata);
        //console.log(formdata);

        dispatch({type:"ADD_ADMIN",data})

    } catch (error) {
        console.log(error.message);
    }
}

export const addUser = (formdata) => async (dispatch) => {

    try {
        const {data} = await api.addUser(formdata);
        //console.log(data);
        dispatch({type:"ADD_USER",data})

    } catch (error) {
        console.log(error.message);
    }
}

export const showUsers = () => async (dispatch) => {
    try {
        const {data} = await api.showUsers();

        dispatch({type:"SHOW_USERS",data})

    } catch (error) {
        console.log(error.message);
    }

}

