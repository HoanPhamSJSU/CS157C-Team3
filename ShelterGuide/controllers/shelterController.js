const express = require('express'); 
const mongoose = require('mongoose'); 
const Shelter = require('../model/Shelters');
const jwt = require('jsonwebtoken'); 
require('dotenv').config(); 

exports.loadShelterController = async (req, res)=> {
    console.log("getting Shelter"); 
    try {
        console.log("verifying"); 
        const shelter = await Shelter.find({});
        console.log("send back the result"); 
        return res.send(shelter)

    } catch (e) {
        console.log("err", e)
        return res.status(500).json({ message: e })
    }
}

exports.loadShelterControllerById = async (req, res)=> {
    const { id } = req.params.id
    try {
        console.log("Loading"); 
        const shelter = await Shelter.findById(req.params.id).exec();
        return res.send(shelter)
    } catch (e) {
        console.log("err", e)
        return res.status(500).json({ message: e })
    }
}




