const mongoose = require('mongoose'); 




const userSchema = mongoose.Schema({
    account_name: {
        type:String, 
    },

    email: {
        type: String, 
        unique : true
    },
    password: {
        type: String, 
    },
    phone: {
        type: String, 
    },
    country: {
        type: String, 
    },
    state: {
        type: String, 
    },
    account_creation_date: {
        type: Date, 
    }
});


const User = mongoose.model('User', userSchema,'Users'); 

module.exports = User