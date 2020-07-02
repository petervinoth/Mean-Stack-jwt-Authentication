const mongoose=require('mongoose');

const CampSchema=new mongoose.Schema({
    name:{
        type:String,
        required:'enter the name'
    },
    Description:{
        type:String,
        required:'enter the description'
    },
    requirement:{
        type:String,
        required:'enter tye requirement'
    },
    price:{

        type:String,
        required:'enter price'
    },
    lastdate:{
        type:String,
        required:'enter the date'
    },
    image:{
        type:String,
        required:true
    },

});

module.exports=mongoose.model('Camp',CampSchema);