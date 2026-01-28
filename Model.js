import mongoose, { Schema } from "mongoose";

const feedback=new mongoose.Schema({
    email: { type: String, required: true },
    rate:{type:Number,required:true},
    comments:{type:String,required:true}
});
export default mongoose.model('feed',feedback)