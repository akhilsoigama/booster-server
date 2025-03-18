const express = require('express');
const cookieParser = require('cookie-parser');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const postRouter = require('./routes/postRoute');
const profileRouter = require('./routes/profileRoute');
const cors = require('./config/cors');
const connectDB = require('./lib/connection');
require('dotenv').config();

const app = express();
connectDB();

app.use(express.json());
app.use(cookieParser());
app.use(cors);

app.use('/api', authRoutes);
app.use('/api', userRoutes);
app.use('/api', postRouter);
app.use('/api', profileRouter);

app.get('/', (req, res) => {
  res.send('<h1>Welcome to Home Page 🚀</h1>');
});


module.exports = app;
