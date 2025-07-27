import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import connectDB from './config/db.js';
import feedbackRoutes from './routes/feedbackRoutes.js';
import adminRoutes from './routes/adminRoutes.js';

dotenv.config();
connectDB();
const mongoURI = process.env.MONGO_URI;

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB Connected Successfully!"))
.catch((err) => console.error("MongoDB Connection Error:", err));


const app = express();

app.use(cors({
    origin: process.env.FRONT_END_URL,
}));
app.use(express.json());

app.use('/api/feedback', feedbackRoutes);
app.use('/api/feedbacks', feedbackRoutes); // for GET and DELETE
app.use('/api/admin', adminRoutes);

app.get('/', (req,res) =>{
    res.send('server is working')
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
