import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

import Admin from '../models/adminModels.js'
import User from '../models/userModels.js'

dotenv.config();
const JWT_TOKEN = process.env.JWT_TOKEN || "";


export const adminLogin = async (req,res) =>{
    try {
        const {email,password} = req.body;
        const foundAdmin = await Admin.findOne({email}) 
        if(!foundAdmin)
            return res.json({message:'Admin not found'})

        const isPassword = await bcrypt.compare(password,foundAdmin.password);

        if(!isPassword)
            return res.json({message:"Invalid password"})

        const token = jwt.sign({email : foundAdmin.email , id : foundAdmin._id}, JWT_TOKEN , {expiresIn : "1h"});

        return res.json({result:foundAdmin, token})

    } catch (error) {
        res.json({message:"Something went wrong"})
    }
}

export const addAdmin = async (req,res) => {

    if(!req.userId)
        return res.json({ message: "Unauthenticated" });

     try {

        const {firstName,lastName,email,password,confirmPassword} =req.body;

        const foundAdmin = await Admin.findOne({email})
        if(foundAdmin)
            return res.json({message:"Admin already exists"})

        if(password!==confirmPassword)
            return res.json({message:"Passwords don't match"})  
        
        const hashpassword = await bcrypt.hash(password,12);

        const newAdmin = new Admin({firstName,lastName,email,password:hashpassword})
        await newAdmin.save()

        return res.json({message:"Admin added"})
        
    } catch (error) {
        return res.json({message:"Something went wrong!"})
    }
}

export const addUser = async (req,res) => {

    // if(!req.userId)
    //     return res.json({ message: "Unauthenticated" });

        try {
            const {firstName,lastName,email,contactnumber,aadhar,gender,city,state,password,confirmPassword} = req.body;

            const foundUser = await User.findOne({email});
            const foundAdhar = await User.findOne({aadhar});

            if(foundAdhar)
                return res.json({message:"Aadhar User already exists!"})
    
            if(foundUser)
                return res.json({message:"User already exists"})
            
            if(password!==confirmPassword)
                return res.json({message:"Passwords do not match"})
            
            if(aadhar.length!==12)
                return res.json({message:"Enter Valid Aadhar Number"})
            
            if(contactnumber.length!==10)
                return res.json({message:"Enter Valid Contact Number"})

            const hashpassword = await bcrypt.hash(password,12);

            const newUser = new User({firstName,lastName,email,contactnumber,aadhar,gender,city,state,password:hashpassword})
            await newUser.save();

            return res.json({message:"User Registered! Try Login!"})
            
        } catch (error) {
            return res.json({message:"Something went wrong!"})
        }
}

export const showUsers = async (req,res) => {

    if(!req.userId)
        return res.json({ message: "Unauthenticated" });

    try {
        
        const data = await User.find();

        if(data.length===0)
            return res.json({message:"No Users found"})
        else
            return res.json({data})

    } catch (error) {
        return res.json({message:"Something went wrong!"})
    }
}