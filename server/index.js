import express from "express";
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv'

import adminRoutes from './routes/adminRoutes.js'
import userRoutes from './routes/userRouters.js'
import postRoutes from "./routes/postRoutes.js";


const app=express();
dotenv.config()

app.use(bodyParser.json({limit:"30mb",extended:"true"}))
app.use(bodyParser.urlencoded({limit:"30mb",extended:"true"}))
app.use(cors())

app.use('/admin',adminRoutes)
app.use('/user',userRoutes)
app.use('/user/post',postRoutes)


const PORT = process.env.PORT || 8000;

mongoose.connect(process.env.CONNECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true})
    .then(()=> app.listen(PORT,console.log(`Server running on port :${PORT}`)))
    .catch((error) => console.log(error.message))

mongoose.set('useFindAndModify',false)