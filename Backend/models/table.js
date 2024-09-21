 const mongoose = require('mongoose');
 


 const tableSchema = new mongoose.Schema({

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

 const Table = mongoose.model("RajForm",tableSchema);
 module.exports=Table;