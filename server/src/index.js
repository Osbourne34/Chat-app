import express from 'express';
import cors from 'cors';
import { Server } from 'socket.io';

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

const server = app.listen(PORT, () => {
  console.log(`Server Started on PORT: ${PORT}`);
  connectDB();
});

const io = new Server(server, {
  cors: {
    origin: ['http://localhost:5173'],
  },
});

io.on('connection', (socket) => {
  console.log('Подключение к сокету');

  // socket.on('disconnect', () => {
  //   console.log(socket.id);
  //   console.log('Отключение');
  // });

  socket.on('join room', (chatId) => {
    console.log('User conntected room: ' + chatId);
    socket.join(chatId);
  });

  socket.on('send message', (message) => {
    socket.to(message.chat._id).emit('new message', message);
  });

  socket.on('typing', (chatId) => {
    socket.to(chatId).emit('typing');
  });
});
