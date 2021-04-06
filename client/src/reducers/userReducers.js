const userReducers = (state={userData:null},action) => {
    switch (action.type) {
        case "LOGIN":
            localStorage.setItem("profile",JSON.stringify({...action?.data}))
            return ({...state,userData:action?.data});

        case "LOGOUT":
            localStorage.clear();
            return ({...state,userData:null})

        case "UPDATE_USER":
            if (action?.data.message ==="User Updated Successfully")
                localStorage.setItem("profile", JSON.stringify({ ...action?.data }));
            alert(action?.data.message);
            return { ...state, userData: action?.data };

        case "UPDATE_USER_PASSWORD":
            if(action?.data.message==="Password Updated Suscessfully")
                localStorage.setItem("profile",JSON.stringify({...action?.data}));
            alert(action?.data.message)
            return {...state,userData:action?.data}

        case "VERIFY_USER":
            return {...state,userData:action?.data}

        case "DELETE":
            return Object.values(state).filter(user => action.payload !== user?._id);
    
        default:
            return state;
    }
}

export default userReducers;