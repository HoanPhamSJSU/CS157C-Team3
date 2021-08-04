const express = require("express");
const mongoose = require("mongoose");
const User = require("../model/User");
const jwt = require("jsonwebtoken");
var bcrypt = require("bcrypt");
require("dotenv").config();

exports.signinController = async (req, res) => {
  const { email, password } = req.body;

  console.log("Signin - happening");
  let hashPassword = "";
  // generate salt to hash password
  const salt = await bcrypt.genSalt(10);
  // now we set user password to hashed password
  hashPassword = await bcrypt.hash(password, salt);

  try {
    console.log("verifying");
    // const secret = require('crypto').randomBytes(64).toString('hex')

    // find the user

    const user = await User.findOne({
      email: email,
    });
    // check if user found
    if (!user) {
      return res.status(404).json({ message: "User not found!" });
    }
    console.log("Current user: " + user);
    // check if password matches
    if (!bcrypt.compareSync(password, user.password))
      return res.status(401).json({ message: "Incorrect password!" });

    // generate auth token
    const token = jwt.sign(JSON.stringify(user), process.env.SECRET_JWT);

    console.log("user return ", token);

    return res.json(user);
  } catch (e) {
    console.log("err", e);
    return res.status(500).json({ message: e });
  }
};

exports.signupController = async (req, res) => {
  const { account_name, email, password } = req.body;
  let hashPassword = "";
  try {
    console.log("registering");
    // generate salt to hash password
    const salt = await bcrypt.genSalt(10);
    // now we set user password to hashed password
    hashPassword = await bcrypt.hash(password, salt);
    console.log(hashPassword);

    const user = await User.create({
      account_name: account_name,
      email: email,
      password: hashPassword,
    });
    console.log("user", user);
    const token = jwt.sign(JSON.stringify(user), process.env.SECRET_JWT);

    console.log("user return ", token);

    return res.send(user);
  } catch (e) {
    console.log("Logging error");
    console.log(e.message);
    return res.status(500).send(e.message);
  }
};

exports.currentUser = async (req, res) => {
  const { email, password } = req.body;
  console.log("current user", req.user);
  const user = await User.findById(req.user._id);

  console.log("curr user", user);
  // const token = jwt.sign(JSON.stringify(user), process.env.KEY);

  // console.log("user return ", token);

  return res.send(user);
};

exports.gettingUserInfo = async (req, res) => {
  const email = req.params.id;
  try {
    console.log("Loading");
    const user = await User.findOne({ email: email });
    console.log("curr user", user);
    return res.send(user);
  } catch (e) {
    console.log("err", e);
    return res.status(500).json({ message: e });
  }
};

exports.updateUserInfo = async (req, res) => {
  const { currEmail, account_name, email, phone, country, state } = req.body;
  try {
    console.log("Loading");
    console.log(currEmail);
    console.log(account_name);
    console.log(email);
    const user = await User.update(
      { email: currEmail },
      {
        account_name: account_name,
        phone: phone,
        country: country,
        state: state
      }
    );
    console.log("curr user", user);
    return res.send(user);
  } catch (e) {
    console.log("err", e);
    return res.status(500).json({ message: e });
  }
};

const generateToken = (user) => {
  console.log("kesadfy", process.env.KEY);
  const token = jwt.sign(user, process.env.KEY);

  console.log("token", token);
  return { ...{ user }, ...{ token } };
};
