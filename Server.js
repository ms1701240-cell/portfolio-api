import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import { saved, seen } from './Authontication.js'
dotenv.config()
const app=express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.Mongo_URI).then(()=>console.log('SUCESS')).catch((err)=>console.log('erroe',err))


app.post('/feedbacksaved',saved);
app.get('/seenfeed',seen)

const PORT = process.env.PORT || 2000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});