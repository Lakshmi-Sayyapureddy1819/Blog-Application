import mongoose from 'mongoose'

const postschema = new mongoose.Schema(
    {
        title:{
            type: String,
            required: true,
        },
     body:{
        type:String,
        required:true,
     },
     author:{
        type:String,
        required:true,
     },
     likes:{
        type:String,
        required:true,
     },
     dislikes:{
        type:String,
        required:true
     },
    }
)