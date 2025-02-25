const express = require('express');
const dotenv = require('dotenv').config();
const dbconnect = require('./config/dbconnect');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');


dbconnect();

const app = express();
app.use(express.urlencoded({ extended: true }));


// middleware
app.use(express.json()); //help to get json data

//Routes
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);

//Start server
const PORT = process.env.PORT ;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});