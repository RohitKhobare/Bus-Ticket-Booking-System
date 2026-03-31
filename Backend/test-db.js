import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const uri = process.env.MONGO_URI;
console.log('Testing connection to:', uri);

try {
  await mongoose.connect(uri, { serverSelectionTimeoutMS: 5000 });
  console.log('Connected successfully');
  await mongoose.disconnect();
} catch (error) {
  console.error('Connection failed:', error.message);
}