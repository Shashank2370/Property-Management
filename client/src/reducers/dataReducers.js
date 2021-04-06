const dataReducers = (state=[],action) => {
    switch (action.type) {
        case "SHOW_USERS":
            if(action?.data.message)
                alert(action?.data.message)
            return action?.data
    
        default:
            return state;
    }
}

export default dataReducers;