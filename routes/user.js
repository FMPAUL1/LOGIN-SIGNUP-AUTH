import express from "express";
import usermodel from "../model/usermodel.js";
import bcrypt from "bcryptjs"
import { errorpage } from "../utils/errorpage.js";
import { login, signup } from "../controllers/userscontroller.js";


const router = express.Router();

router.post("/login",login );

router.post("/signup", signup)




export default router ;