import mongoose from "mongoose";

const user = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        require:true
    },
    isadmin:{
        type:Boolean,
        default:false
    }

},{timestamps:true})

export default mongoose.model("user",user)