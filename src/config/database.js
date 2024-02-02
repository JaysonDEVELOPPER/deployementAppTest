const mongoose = require('mongoose');
require('dotenv')

const connectDatabase = () => {
    mongoose.connect(process.env.URL_DATABASE)
        .then(() => console.log("Connect to the database"))
        .catch(err => console.log("Error: " + err.message));
}

module.exports = connectDatabase;