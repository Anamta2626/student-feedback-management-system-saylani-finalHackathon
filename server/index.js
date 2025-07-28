import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import connectDB from './config/db.js';
import Admin from './models/Admin.js';
import feedbackRoutes from './routes/feedbackRoutes.js';
import adminRoutes from './routes/adminRoutes.js';
import bcrypt from 'bcryptjs';

dotenv.config();
connectDB();
const mongoURI = process.env.MONGO_URI;
app.use(express.urlencoded({ extended: true }));

mongoose.connect("mongodb+srv://anamtasajidali:uupB8SpBNYtaUAvr@cluster1.nmxmzdi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1")
// , {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
// .then(() => console.log("MongoDB Connected Successfully!"))
// .catch((err) => console.error("MongoDB Connection Error:", err));
.then(() => {
    console.log("MongoDB connected");
    createDefaultAdmin(); 
  })


const app = express();

// app.use(cors({
//     origin: process.env.FRONT_END_URL,
// }));
app.use(express.json());

const createDefaultAdmin = async () => {
    try {
        const existingAdmin = await Admin.findOne({ username: 'admin123' });
        if (!existingAdmin) {
            const hashedPassword = await bcrypt.hash('adminpass', 10);
            const newAdmin = new Admin({
                username: 'admin123',
                password: hashedPassword
            });
            await newAdmin.save();
            console.log('Default admin created successfully');
        } else {
            console.log('Default admin already exists');
        }
    } catch (error) {
        console.error('Error creating default admin:', error);
    }
};


app.use('/api/feedback', feedbackRoutes);
app.use('/api/feedbacks', feedbackRoutes); // for GET and DELETE
app.use('/api/admin', adminRoutes);

app.get('/', (req,res) =>{
    res.send('server is working')
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
