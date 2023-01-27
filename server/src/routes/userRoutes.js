import { Router } from 'express';
import { registerValidation, loginValidation } from '../utils/validation.js';
import { validationCheck } from '../middlewares/validationCheck.js';
import { authCheck } from '../middlewares/authCheck.js';
import {
  registerUser,
  loginUser,
  allUsers,
  getMe,
} from '../controllers/userController.js';

export const userRouter = Router();

userRouter.post('/register', registerValidation, validationCheck, registerUser);
userRouter.post('/login', loginValidation, validationCheck, loginUser);
userRouter.get('/', authCheck, allUsers);
userRouter.get('/getMe', authCheck, getMe);
