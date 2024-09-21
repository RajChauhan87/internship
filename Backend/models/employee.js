const mongoose = require('mongoose');
const { type } = require('os');

const employeeSchema = new mongoose.Schema({
    name: {
        type:String
    },
    address:{
        type:String
    },
    country:{
        type:String
    },
    state:{
        type:String
    },
   qualification: {
    type:String

    },
    relegion: {
        type:String
    
        }

})

const Employee = mongoose.model("RajEmployee",employeeSchema);

module.exports=Employee;