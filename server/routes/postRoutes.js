import express from 'express';
import { addPost,getPosts,deletePost } from "../controllers/postControllers.js";
import auth from '../middleware/auth.js'

const router = express.Router();

router.post('/addPost/:id',auth,addPost);
router.get('/getPosts/:id',auth,getPosts)
router.delete('/deletePost/:id',auth,deletePost)

export default router;