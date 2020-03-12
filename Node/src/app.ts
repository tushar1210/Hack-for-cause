import express = require('express');
var app = express();
import mongoose = require('mongoose');
const PORT = process.env.PORT || 50;
import user = require('./users')
import bodyParser = require('body-parser')

const conn = "mongodb+srv://Tushar:idbi1234@cluster0-pqne8.mongodb.net/test?retryWrites=true&w=majority"

mongoose.connect(conn,{useNewUrlParser: true,useUnifiedTopology: true },()=>{
    console.log('\nAtlas Conected!');
});
mongoose.set('useCreateIndex', true) ;
mongoose.set('useFindAndModify', false);
// mongoose.Promise = global.Promise ;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('',user.router);

app.listen(PORT,()=>{
    console.log('Listening to '+PORT) ;
});

export default mongoose ;
