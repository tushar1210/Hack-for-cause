import mongoose from "./app";
import model = require('./models') ;

var User = model.User;

export async function login(email:String,pass:String){
   var res = await User.findOne({email:email,password:pass}) ;
   return res;
}

export async function signUp(email:String,pass:String,name:String,phone:String){
   var user = new User({
      name:name,
      phone:phone,
      email:email,
      password:pass
   });
   user.save();
}
