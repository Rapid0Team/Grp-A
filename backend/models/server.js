const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDb = require('./config/db');
const authRoutes = require('./routes/auth');

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDb();

const app = express();
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
