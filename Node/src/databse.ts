import mongoose from "./app";
import model = require('./models') ;
var User = model.User;
export async function login(email:String,pass:String){
   var res = await User.findOne({email:email,password:pass}) ;
   return res;
}