const mongoose = require ('mongoose');


mongoose.connect('mongodb+srv://mernstack:mern@mern.tzffmt0.mongodb.net/NewBatch?retryWrites=true&w=majority&appName=mern').then(() =>{
    console.log("connection successfull to mongo db");

}).catch((error) =>{
    console.log(error);

});
