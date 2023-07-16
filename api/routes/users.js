import express from 'express';
import User from '../models/User.js';
import { deleteUser, getUser, getUsers, updateUser } from '../controllers/users.js';
import { verifyAdmin, verifyToken, verifyUser } from '../utils/verifyToken.js';

const router = express.Router();

// router.get("/checkauthantication", verifyToken, (req,res,next)=>{
//     res.send("Hello user, You are authanticated!")
// })

// router.get("/checkuser/:id", verifyUser, (req,res,next)=>{
//     res.send("Hello User, you are logged in and can delete your account")
// })

// router.get("/checkadmin/:id", verifyAdmin, (req,res,next)=>{
//     res.send("Hello User, you are logged in and can delete your account")
// })

//UPDATE
router.put("/:id", verifyUser,updateUser)

//DELETE
router.delete("/:id", verifyUser,deleteUser)

//GET
router.get("/:id", verifyUser,getUser)

//GET ALL
router.get("/", verifyAdmin,getUsers)

export default router;