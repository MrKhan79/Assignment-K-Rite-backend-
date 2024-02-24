const express = require('express');
const { connectToDb } = require('./config/db');
const app = express();
const todoRoutes = require('./routes/todoRoutes');
const taskRoutes = require('./routes/tasksRoutes');
const userRoutes = require('./routes/userRoutes');
const cookieParser = require('cookie-parser');

var cors = require('cors');

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
app.use(cors())


// db connection 
connectToDb();

app.use('/api',todoRoutes);
app.use('/api', taskRoutes);
app.use('/api/v1', userRoutes);

module.exports =  app;