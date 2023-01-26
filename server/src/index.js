import express from 'express';

import * as dotenv from 'dotenv';
dotenv.config();

import { connectDB } from './config/db.js';
import { userRouter } from './routes/userRoutes.js';

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());

app.use('/api/user', userRouter);

app.listen(PORT, () => {
  console.log(`Server Started on PORT: ${PORT}`);
  connectDB();
});
