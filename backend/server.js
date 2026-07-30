const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./routes/authroutes');

const app = express();

// Enable CORS so Angular (http://localhost:4200) can communicate with backend
app.use(cors());

// Parse JSON request bodies
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);

// Database Connection & Server Listen
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/fake-news-db';

mongoose.connect(MONGO_URI)
  .then(() => {
    console.log('MongoDB connected successfully');
    app.listen(PORT, () => console.log(`Backend server running on http://localhost:${PORT}`));
  })
  .catch(err => console.error('MongoDB connection error:', err));