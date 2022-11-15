import express from "express";
import http from "http";
import mongoose from "mongoose";
const app = express ();
const server = http.createServer(app);
import user from "./routes/user.js"
import cookie from "cookie-parser"




mongoose.connect("mongodb://localhost:27017",()=>{
    console.log( 'db connected' )
});

app.use(cookie())
app.use(express.json())

app.use("/",user)


// creating error page
app.use((err,req,res,next)=>{
    try {
         res.status(500).json({
            message:err.message,
            status:err.status,
            stack:err.stack
         })
    } catch (error) {
        next(error)
    }
})


server.listen(3001,()=>{
    console.log('server running')
})




