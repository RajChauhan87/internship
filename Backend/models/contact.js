const mongoose = require('mongoose');
const { type } = require('os');

const contactSchema = new mongoose.Schema({
    name: {
        type:String
    },
    email:{
        type:String
    },
    mobile:{
        type:Number
    },
    desc:{
        type:String
    }

});

const Cont = mongoose.model("RajContact",contactSchema);

module.exports=Cont;
