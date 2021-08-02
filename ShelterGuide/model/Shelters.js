const mongoose = require('mongoose'); 

const shelterSchema = mongoose.Schema({
    shelter_name: {
        type: String, 
    },
    imageUrl: {
        type: String, 
    },
    rating_score: {
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


const shelters = mongoose.model('shelters', shelterSchema,'Shelters'); 
module.exports = shelters