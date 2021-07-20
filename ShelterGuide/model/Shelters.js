const mongoose = require('mongoose'); 

const shelterSchema = mongoose.Schema({
    shelter_name: {
        type: String, 
    },
    address: {
        type: String, 
    },
    website: {
        type: String, 
    },
    phoneNumber: {
        type: String, 
    },
    latitude: {
        type: String, 
    },
    longitude: {
        type: String, 
    },
    description: {
        type: String,
    }
});


const shelters = mongoose.model('Shelters', shelterSchema); 
module.exports = shelters