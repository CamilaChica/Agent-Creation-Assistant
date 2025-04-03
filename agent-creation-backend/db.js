// backend/db.js

import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/AgentCreationDB', {

    });
    console.log('MongoDB connected');
  } catch (err) {
    console.error('Error connecting to MongoDB', err);
    process.exit(1);
  }
};

// module.exports = connectDB;
export default connectDB;