import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import { middleware } from './utils/error.js';
import authRoutes from './routes/auth.route.js';
import requestRoutes from './routes/request.route.js';

const app = express();
dotenv.config();

app.use(express.json());
app.use(cors());  

app.listen(3000, () => console.log('Running'))
mongoose.connect(process.env.MONGO);

app.use('/api/auth', authRoutes);
app.use('/api/request', requestRoutes);  
app.use(middleware);