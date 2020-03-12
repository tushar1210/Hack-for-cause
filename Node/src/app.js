"use strict";
exports.__esModule = true;
var express = require("express");
var app = express();
var mongoose = require("mongoose");
var PORT = process.env.PORT || 50;
var user = require("./users");
var bodyParser = require("body-parser");
var conn = "mongodb+srv://Tushar:idbi1234@cluster0-pqne8.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(conn, { useNewUrlParser: true, useUnifiedTopology: true }, function () {
    console.log('\nAtlas Conected!');
});
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);
// mongoose.Promise = global.Promise ;
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('', user.router);
app.listen(PORT, function () {
    console.log('Listening to ' + PORT);
});
exports["default"] = mongoose;
