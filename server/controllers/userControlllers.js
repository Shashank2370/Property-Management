import bcrypt from 'bcryptjs'
import Mongoose from 'mongoose';
import User from '../models/userModels.js';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();
const JWT_TOKEN = process.env.JWT_TOKEN || "";

export const userLogin = async (req,res) => {

    try {
        const {email,password} = req.body;
        
        const foundUser = await User.findOne({email})
        if(!foundUser)
            return res.json({message:"User not found"})
            
        const isPassword = await bcrypt.compare(password,foundUser.password)

        if(!isPassword)
            return res.json({message:"Invalid Password"})

        const token = jwt.sign({email : foundUser.email , id : foundUser._id}, JWT_TOKEN , {expiresIn : "1h"});

        return res.json({result:foundUser, token})

    } catch (error) {
        return res.json({message:"Something went wrong"})
    }
}

export const updateUser = async (req,res) => {

    if(!req.userId)
        return res.json({ message: "Unauthenticated" });

    try {
        const {id} = req.params;
        const {firstName,lastName,email,contactnumber,aadhar,gender,city,state,password} = req.body;

        if(!Mongoose.Types.ObjectId.isValid(id))
            return res.json({message:`No User with id: ${id}`})
        
        const updatedUser = {firstName,lastName,email,contactnumber,aadhar,gender,city,state,password,_id:id};

        await User.findByIdAndUpdate(id,updatedUser,{new:true})

        const token = jwt.sign({email : updatedUser.email , id : updatedUser._id}, JWT_TOKEN , {expiresIn : "1h"});

        return res.json({result:updatedUser,message:"User Updated Successfully", token})

    } catch (error) {
        return res.json({message:"Something went wrong"})
    }
}

export const updateUserPassword = async (req,res) => {

    if(!req.userId)
        return res.json({ message: "Unauthenticated" });

    try {
        const {id} = req.params;
        const {password,newPassword,confirmPassword} = req.body;

        if(!Mongoose.Types.ObjectId.isValid(id))
            return res.json({message:`No User with id: ${id}`});
        
        const foundUser = await User.findById(id);
        if(!foundUser)
            return res.json({message:"No User found"})
        
        const isPassword = await bcrypt.compare(password,foundUser.password)
        if(!isPassword)
            return res.json({message:"Invalid Password"});

        if(newPassword!==confirmPassword)
            return res.json({message:"Passwords don't match"});
        
        const hashpassword = await bcrypt.hash(newPassword,12);

        const updatedUserPassword = {password:hashpassword,_id:id}

        await User.findByIdAndUpdate(id,updatedUserPassword,{new:true});

        const token = jwt.sign({email :updatedUserPassword.email , id :updatedUserPassword._id}, JWT_TOKEN , {expiresIn : "1h"});

        return res.json({result:updatedUserPassword,message:"Password Updated Suscessfully",token})
        

    } catch (error) {
        return res.json({message:"Something went wrong"});
    }
}

export const verifyUser = async (req,res) => {

    if(!req.userId)
        return res.json({ message: "Unauthenticated" });

    try {
        const {email,aadhar,contactnumber,password}=req.body

        const foundUser = await User.findOne({email});
        if(!foundUser)
            return res.json({message:"Incorrect Email"})
        
        if(aadhar!==foundUser.aadhar)
            return res.json({message:"Incorrect Aadhar Number"})
        if(contactnumber!==foundUser.contactnumber)
            return res.json({message:"Incorrect Contact Number"})
        
        const isPassword = await bcrypt.compare(password,foundUser.password)
        
        if(!isPassword)
            return res.json({message:"Incorrect Password"})
        
        return res.json({message:"User Verified"})
        
        
    } catch (error) {
        return res.json({message:"Something went wrong!"})
    }
}

export const userDelete = async (req,res) => {

    if(!req.userId)
        return res.json({ message: "Unauthenticated" });

    try {
        
        const {id} = req.params;

        if(!Mongoose.Types.ObjectId.isValid(id))
            return res.json({message:`No User with id: ${id}`})

        await User.findByIdAndRemove(id);

        return res.json({message:"Account deleted Suscessfully"})

    } catch (error) {
        return res.json({message:"Something went wrong!"})
    }
}