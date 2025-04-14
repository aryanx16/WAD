const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const cors = require('cors')
dotenv.config();

const app = express();
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true, // if you're using cookies or auth headers
  }));
app.use(express.json());

// Connect DB
connectDB();

// Routes
app.use('/api', require('./routes/userRoutes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
