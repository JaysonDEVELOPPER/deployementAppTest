const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const connectDatabase = require('./config/database');

connectDatabase();

app.get('/', (req, res, next) => {
    res.status(200).json({message: "Welcome to the app"});
})

app.listen(3000, () => {
    console.log("App run on port 3000");
})