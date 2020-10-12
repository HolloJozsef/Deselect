import mongoose from 'mongoose'

const student = mongoose.Schema({
    id:Number,
    firstName:String,
    lastName:String,
    age:Number,
    nationality:String
});
export default mongoose.model('student',student )