import express from 'express';
import { addPost,getPosts,deletePost,getAllposts } from "../controllers/postControllers.js";
import auth from '../middleware/auth.js'

const router = express.Router();

router.post('/addPost/:id',auth,addPost);
router.get('/getPosts/:id',auth,getPosts)
router.get('/getAllposts',auth,getAllposts)
router.delete('/deletePost/:id',auth,deletePost)

export default router;