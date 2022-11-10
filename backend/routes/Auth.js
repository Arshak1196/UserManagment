import express from 'express';
const router = express.Router();
import { userSignin, userSignup } from '../controllers/userController.js';

// user Sign Up
router.post('/signup', userSignup)

//user Sign In
router.post('/signin', userSignin)


export default router