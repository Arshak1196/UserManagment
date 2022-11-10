import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userSchema = new Schema({
    fname: {
        type: String,
        required: [true, 'Firs Name is required'],
    },
    lname: {
        type: String,
        required: [true, 'Last Name is required'],
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Password is required']
    }
}, { timestamps: true })

export default mongoose.model('User', userSchema)