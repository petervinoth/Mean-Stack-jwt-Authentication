const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/card',{useUnifiedTopology: true, useCreateIndex:true, useNewUrlParser: true,useFindAndModify:false},(err)=>{
    if(!err){
        console.log('db connection');
    }
    else{
        console.log("err"+err);
    }
});

require('./User');
require('./Camp');
