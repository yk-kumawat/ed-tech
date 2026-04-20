import mongoose from 'mongoose';
const sessionScheema = new mongoose.Schema({
courseId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"CourseD",
    required:true
},
day:{
    type:Number,
    required:true
},
title:{
    type:String,
    required:true
},
description: String,
videoUrl:String,
thumbnail:String
},{timestamps:true});

export default mongoose.model("Session",sessionScheema);
