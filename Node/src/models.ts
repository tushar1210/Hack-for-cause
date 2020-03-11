import mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    name:String,
    password:String,
    phone:String,
    email:String
});

export var User = mongoose.model('User',userSchema);

