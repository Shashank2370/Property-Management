import express from 'express';
import { userLogin,updateUser,updateUserPassword,verifyUser,userDelete } from "../controllers/userControlllers.js";
import auth from '../middleware/auth.js'

const router = express.Router();

router.post('/userLogin',userLogin)
router.patch('/updateUser/:id',auth,updateUser)
router.patch('/updateUserPassword/:id',auth,updateUserPassword)
router.post('/verifyUser',auth,verifyUser)
router.delete('/userDelete/:id',auth,userDelete)

export default router;