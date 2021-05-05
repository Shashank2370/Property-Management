import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    name:{
        type:String,
        required:true
    },
    address: {
        type:String,
        required:true
    },
    city: {
        type:String,
        required:true
    },
    state: {
        type:String,
        required:true
    },
    document: {
        type:String
    },
    description: {
        type:String
    },
    createdAt:{
        type:Date,
        default:Date.now,
    }
})

const Post = mongoose.model("Post",postSchema)
export default Post;