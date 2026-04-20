import mongoose from 'mongoose';
const coursedScheem = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    instructor:{
        type:String,
        required:true
    },
    image:{
        type:String
    }
},{timestamps: true});

export default mongoose.model("CourseD",coursedScheem);