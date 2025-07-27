import mongoose from 'mongoose';

const adminSchema = new mongoose.Schema({
  username: String,
  password: String // hashed password
});

export default mongoose.model('Admin', adminSchema);
