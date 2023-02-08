import { Router } from 'express';
import { authCheck } from '../middlewares/authCheck.js';
import {
  createMessage,
  getMessages,
} from '../controllers/messageController.js';

export const messageRoutes = Router();

messageRoutes.post('/', authCheck, createMessage);
messageRoutes.get('/:chatId', authCheck, getMessages);
