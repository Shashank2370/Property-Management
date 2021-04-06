import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    firstName:{
        type:String,
        required:true        
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    contactnumber:{
        type:String,
        required:true
    },
    aadhar:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const User = mongoose.model('User',userSchema);

export default User;