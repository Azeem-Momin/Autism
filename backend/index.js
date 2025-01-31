import express from 'express';
import mongoose from 'mongoose';

const app = express();

// Connect to MongoDB
try {
  await mongoose.connect('mongodb://localhost:27017/test');
    console.log('MongoDB Connected');
} catch (error) {
    console.error("MongoDB Connection Error: ", error);
}


app.get('/', (req, res) => {
  res.send('Hello World');
});
