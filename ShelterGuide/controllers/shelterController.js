const express = require('express'); 
const mongoose = require('mongoose'); 
const Shelters = require('../model/Shelters');
const jwt = require('jsonwebtoken'); 
const ObjectId = require('mongoose').ObjectID;
require('dotenv').config(); 



exports.loadShelterController = async (req, res)=> {
    console.log("getting Shelter"); 
    try {
        console.log("verifying"); 
        const shelter = await Shelters.find({});
        console.log("send back the result"); 
        console.log(shelter);

        return res.send(shelter)
    } catch (e) {
        console.log("err", e)
        return res.status(500).json({ message: e })
    }
}

exports.loadShelterControllerById = async (req, res)=> {
    const id  = req.params.id;
    try {
        console.log("Loading"); 
        const shelter = await Shelters.findById({_id : mongoose.Types.ObjectId(req.params.id.trim())});
        console.log("send back the result"); 
        console.log(shelter);
        return res.send(shelter)
    } catch (e) {
        console.log("err", e)
        return res.status(500).json({ message: e })
    }
}




