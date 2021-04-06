import * as api from '../api/postapi'

export const addPost = (id,formdata) => async (dispatch) => {
    try {
        const {data} = await api.addPost(id,formdata)

        dispatch({type:"ADD_POST",payload:data})
    } catch (error) {
        console.log(error.message);
    }
}

export const getPosts = (id) => async (dispatch) => {
    try {
        const {data} = await api.getPosts(id);

        dispatch({type:"FETCH_POSTS",payload:data})
    } catch (error) {
        console.log(error.message);
    }
}

export const deletePost = (id) => async (dispatch) => {
    try {
        
        await api.deletePost(id);

        dispatch({type:"DELETE",payload:id})

    } catch (error) {
        console.log(error.message);
    }
}