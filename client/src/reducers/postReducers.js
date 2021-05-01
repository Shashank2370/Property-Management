const postReducers = (posts = [],action) => {
    switch (action.type) {
        case "ADD_POST":
            alert(action.payload?.message)
            return [...posts,action.payload] 
        
        case "FETCH_POSTS":
            if (action.payload?.message)
                alert(action.payload.message);
            return action.payload;

        case "ALL_POSTS":
            if (action.payload?.message)
                alert(action.payload.message);
            return action.payload;
        
        case "CLEAR":
            return [];

        case "DELETE":
            return Object.values(posts).filter(post => action.payload !== post._id);
            
        default:
            return posts;
    }
}
export default postReducers;