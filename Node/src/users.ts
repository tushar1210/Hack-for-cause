
import express = require('express');
import handlers = require('./databse');
import mongoose = require('./app');
import bodyParser = require('body-parser')
export const router = express.Router();

var urlencodedParser = bodyParser.urlencoded({ extended: false })
var jsonParser = bodyParser.json()

router.post('/login',jsonParser,async(request,response)=>{
    var email=request.body.email;
    var pass = request.body.password;
    console.log(email,pass);

    var res = await handlers.login(email,pass).then((res)=>{
        
        response.status(200).json({
            success:true,
            response:res
        });
    }).catch((err)=>{
        response.status(500).json({
            success:false,
            response:err
        });
    });
});

router.post('/signUp',async(request,response)=>{
    var email=request.query.email;
    var pass = request.query.password;
    var name = request.query.name;
    var phone = request.query.phone ;
    await handlers.signUp(email,pass,name,phone).then((data)=>{
        response.status(200).json({
            success:true,
            response:data
        });
    }).catch((err)=>{
        response.status(500).json({
            success:false,
            response:err
        });
    });

});

