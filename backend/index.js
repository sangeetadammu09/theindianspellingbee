const express = require('express');
const cors = require('cors');
const connectDb = require("./src/config/db");

const app = express();

// middleware
app.use(cors({
    origin: "*"
  }));

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// routers
const router = require('./src/routes/contactRoute')
app.use('/api', router)

//port
const PORT = process.env.PORT || 8080

//connection to db
connectDb();

//server

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})