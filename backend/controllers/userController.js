import User from '../models/User.js'
import bcrypt from 'bcryptjs'
import { createError } from '../middleware/error.js';

export const userSignup = async (req, res, next) => {
    try {
        //Check user exists
        const userExists = await User.findOne({ email: req.body.email })
        if (userExists) {
            return next(createError(400, "User already exists"));
        }

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        const newUser = new User({
            ...req.body,
            password: hash
        })
        await newUser.save()

        if (newUser) {
            res.status(200).json({
                id: newUser._id,
                fname: newUser.fname,
                lname: newUser.lname,
                email: newUser.email
            })
        } else {
            return next(createError(400, 'Invalid User Data'))
        }

    } catch (error) {
        next(error)
    }
}

export const userSignin=async (req,res,next) => {
    const {email,password}=req.body
    try {
        if(!email || !password){
            return next(createError(400,'Email and Password is required'))
        }

        const user=await User.findOne({email})
        if(user && (await bcrypt.compare(password, user.password))){
            res.status(200).json({
                id:user._id,
                fname:user.fname,
                lname:user.lname,
                email:user.email
            })
        }else{
            return next(createError(400,'Invalid Credentials'))
        }

    } catch (error) {
        
    }
}

export const getUsers = async (req,res,next)=>{
    try {
        let users=await User.find().sort({'createdAt':-1}).limit(100).select('-password')
        if(!users[0]){
            return next(createError(400,'Users not found'))
        }
        res.status(200).json(users)
    } catch (error) {
        next(error)
    }
}

