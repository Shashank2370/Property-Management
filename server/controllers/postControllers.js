import Mongoose from 'mongoose';
import Post from '../models/postModel.js'
import User from '../models/userModels.js'
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';


export const addPost = async (req,res) =>{

    if(!req.userId)
        return res.json({ message: "Unauthenticated" });

   // try {
        const {id} = req.params
        const {name,address,city,state,document,description} = req.body

        const newPost = new Post({owner:id,name,address,city,state,document,description})
        await newPost.save()

        return res.json({message:"Post Added"})

    // } catch (error) {
    //     return res.json({message:"Something went wrong!"})
    // }

}

export const getPosts = async (req,res) => {

    if(!req.userId)
        return res.json({ message: "Unauthenticated" });

    try {
        const {id} = req.params;

        const founduser = await User.findById(id);

        const data = await Post.find({owner:founduser._id});

        if(data.length===0){
            return res.json({message:"No Posts found!"})
        }
        else{
            return res.json({data})
        }

    } catch (error) {
        return res.json({message:"Something went wrong!"})
    }
 }

 export const deletePost = async (req,res) => {

    if(!req.userId)
        return res.json({ message: "Unauthenticated" });

    try {
        const {id} = req.params;

        if(!Mongoose.Types.ObjectId.isValid(id))
            return res.json({message:`No Post with id: ${id}`})

        await Post.findByIdAndRemove(id);

        return res.json({message:"Post deleted Suscessfully"})
    } catch (error) {
        return res.json({message:"Something went wrong"})
    }
 }