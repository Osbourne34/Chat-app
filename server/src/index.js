import express from 'express';
import cors from 'cors';

import * as dotenv from 'dotenv';
dotenv.config();

import { connectDB } from './config/db.js';
import { userRouter } from './routes/userRoutes.js';
import { chatRouter } from './routes/chatRoutes.js';
import { messageRoutes } from './routes/messageRoues.js';

const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/user', userRouter);
app.use('/api/chat', chatRouter);
app.use('/api/message', messageRoutes);

app.listen(PORT, () => {
  console.log(`Server Started on PORT: ${PORT}`);
  connectDB();
});
