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
        console.log(`MongoDB Database status: ${con.connection.status}`);
    }).catch(err => {
        console.log(err);
    })

}

module.exports = connectDatabase;