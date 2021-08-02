const dotenv = require('dotenv');
dotenv.config();

const mongoose = require('mongoose'); 

const connectDatabase = () => {
        mongoose.connect('mongodb://localhost:27017/CS157Shelter', {
        useNewUrlParser: true, 
        useUnifiedTopology: true, 
        useCreateIndex: true
    }).then(con => {
        console.log(`MongoDB Database with host: ${con.connection.host}`);
    }).catch(err => {
        console.log(err);
    })
    //Get the default connection
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'MongoDB connection error:'));

}

module.exports = connectDatabase;