import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import { saved, seen } from './Authontication.js'

dotenv.config()
const app = express(); // لازم نعرف app الأول

// إعدادات الـ CORS الصح عشان تسمح لموقعك على Netlify
app.use(cors({
  origin: [
    'http://localhost:5173', 
    'https://mohamed-sayed-portfolio.netlify.app' 
  ],
  methods: ['GET', 'POST'],
  credentials: true
}));

app.use(express.json());

// الاتصال بالداتابيز
mongoose.connect(process.env.Mongo_URI)
  .then(() => console.log('SUCCESS: Connected to MongoDB'))
  .catch((err) => console.log('Error connecting to MongoDB:', err))

app.post('/feedbacksaved', saved);
app.get('/seenfeed', seen);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

