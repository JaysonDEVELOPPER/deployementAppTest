const mongoose = require('mongoose');

const connectDatabase = () => {
    mongoose.connect('mongodb://root:root@localhost:27017/test?authSource=admin')
        .then(() => console.log("Connect to the database"))
        .catch(err => console.log("Error: " + err.message));
}

module.exports = connectDatabase;