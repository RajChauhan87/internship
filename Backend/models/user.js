const mongoose = require('mongoose');
const { type } = require('os');

const userSchema = new mongoose.Schema({
    name: {
        type:String
    },
    email:{
        type:String
    },
    mobile:{
        type:Number
    },
     password:{
        type:Number
    }

});

const User = mongoose.model("RajUser",userSchema);
module.exports=User;
