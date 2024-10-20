import mongoose from 'mongoose'

const commentSchema = new mongoose.Schema({
    test:{
        type:String,
        required:true,
    },
    likes:{
        type:String,
        required:true,
    },
    dislikes:{
        type:String,
        required:true,
    },
})

const Comment =  mongoose.model('Comment',commentSchema)
 export default Comment