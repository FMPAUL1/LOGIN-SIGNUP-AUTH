import mongoose from "mongoose";

const Hotels = new mongoose.Schema({
    title:{
        type:String
    },
    address:{
        type:String

    },
    desc:{
        type:String
    },
    room:{
        type:Number
    }
},{timestamps:true})

export default mongoose.model("hotela",Hotels)