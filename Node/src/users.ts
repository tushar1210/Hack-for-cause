
import express = require('express');
import handlers = require('./databse');
import mongoose = require('./app');

export const router = express.Router();

router.post('/login',async(request,response)=>{
    var email=request.query.email;
    var pass = request.query.password;
    console.log(email,pass);

    var res = await handlers.login(email,pass).then((res)=>{
        
        response.status(200).json({
            success:true,
            response:res
        });
    }).catch((err)=>{
        response.status(500).json({
            success:false,
            response:res
        });
    });
});

router.post('')

