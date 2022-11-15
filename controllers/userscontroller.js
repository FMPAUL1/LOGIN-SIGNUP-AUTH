import usermodel from "../model/usermodel.js"
import { errorpage } from "../utils/errorpage.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
export const signup =async (req,res,next)=>{ 
    try {
        const salt = bcrypt.genSaltSync(10)
         const hash= bcrypt.hashSync(req.body.password,salt)
const user = new usermodel({username:req.body.username, password:hash})
await user.save();
res.status(200).json(user)
    } catch (error) {
        throw error
    }}



export const login= async(req,res,next)=>{
    try {
        const users = await  usermodel.findOne({username:req.body.username})
        if (!users ) {
            
           return next(errorpage(500, "wrong user"))
        }
        const ispassword = await  bcrypt.compareSync(req.body.password,users.password)
        if (!ispassword){
            return next(errorpage(501,"wrong password"))
        } else {  
const  token = jwt.sign({id:users.id,isadmin:users.isadmin },"my secret key")
const {password, isadmin ,...others}=users._doc

             res.cookie("mytoken",token,{
                httpOnly:true
             }).status(200).json(others)
        }
    } catch (error) {
      next (error)   
    }}