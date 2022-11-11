import express from 'express';
const router = express.Router();
import { getUsers, userSignin, userSignup } from '../controllers/userController.js';

// user Sign Up
router.post('/signup', userSignup)

//user Sign In
router.post('/signin', userSignin)

//get User lists
router.get('/users',getUsers)


export default router