import * as api from '../api/userapi'

export const userLogin = (formdata,history) => async (dispatch) => {

    try {
        const {data} = await api.userLogin(formdata);

        dispatch({type:'LOGIN',data})

        if(data?.message)
            alert(data.message)
        else
            history.push('/user/showUser')

    } catch (error) {
        console.log(error.message);
    }
}

export const userLogout = (history) => async (dispatch) => {
    try {
        
        dispatch({type:"LOGOUT"})
        history.push("/");

    } catch (error) {
        console.log(error.message);
    }
}

export const updateUser = (id,formdata,history) => async (dispatch) => {
    try {
        
        const {data} = await api.updateUser(id,formdata);

        dispatch({type:"UPDATE_USER",data})

        history.push("/user/showUser")
    } catch (error) {
        console.log(error.message);
    }
}

export const updateUserPassword = (id,formdata,history) => async (dispatch) => {
    try {
         const {data} = await api.updateUserPassword(id,formdata);

        dispatch({type:"UPDATE_USER_PASSWORD",data})

        history.push('/user/updateUserPassword');

    } catch (error) {
        console.log(error.message);
    }
} 

export const verifyUser = (formdata,history) => async (dispatch) => {
    try {
        const {data} = await api.verifyUser(formdata);

        dispatch({type:"VERIFY_USER",data})

        if(data.message==="User Verified")
            history.push('/user/post/addPost')
        else
            alert(data.message)
        
    } catch (error) {
        console.log(error.message);
    }
}

export const userDelete = (id,history) => async (dispatch) => {
    try {
        const input = prompt("Are You Sure (Y/N)")
        if(input==="Y"){
            const {data} = await api.userDelete(id)
            alert(data?.message)

            dispatch({type:"DELETE",payload:id})
            history.push('/')
        }
        

    } catch (error) {
        console.log(error);
    }
}