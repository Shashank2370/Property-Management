
const adminReducer = (state={adminData:null},action) =>{
    switch (action.type) {
        case "LOGIN":
            localStorage.setItem("profile",JSON.stringify({...action?.data}));
            return {...state, adminData: action?.data};

        case "LOGOUT":
            localStorage.clear();
            return {...state,adminData:null};

        case "ADD_ADMIN":
            alert(action?.data.message)
            //console.log(action?.data.message);
            return {...state, adminData: action?.data};

        case "ADD_USER":
            alert(action?.data.message)
            return {...state, adminData:action?.data};
    
        default:
            return state;
    }
}

export default adminReducer;