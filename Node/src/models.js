"use strict";
exports.__esModule = true;
var mongoose = require("mongoose");
var userSchema = new mongoose.Schema({
    name: String,
    password: String,
    phone: String,
    email: String
});
exports.User = mongoose.model('User', userSchema);
