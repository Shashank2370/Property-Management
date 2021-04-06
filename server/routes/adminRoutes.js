import express from 'express';
import {adminLogin,addAdmin,addUser,showUsers} from '../controllers/adminControllers.js'
import auth from '../middleware/auth.js'

const router = express.Router();

router.post('/adminLogin',adminLogin)
router.post('/addAdmin',auth,addAdmin)
router.post('/addUser',auth,addUser)
router.get('/showUsers',auth,showUsers)

export default router