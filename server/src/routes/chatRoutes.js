import { Router } from 'express';
import { authCheck } from '../middlewares/authCheck.js';
import { createChat, getChats } from '../controllers/chatController.js';

export const chatRouter = Router();

chatRouter.post('/', authCheck, createChat);
chatRouter.get('/', authCheck, getChats);
