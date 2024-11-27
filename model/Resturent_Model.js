const mongoose = require('mongoose');

const ResturenSchema = new mongoose.Schema({ 
    title:{
        type:"String",
        required:[true, "Resturent title is require"]
    },
    imageUrl:{
        type:"string"
    },
    foods:{
        type:Array
    },
    time:{type :"string"},

    pickup:{
        type:"Boolean",
        default:true
    },
    delivery:{
        type:"Boolean",
        default:true
    }, 
    isOpen:{
        type:"Boolean",
        default:true
    },
    logUrl:{
     type:"string"
    },
  rating:{
   type:"Number",
   default:1,
   min:1,
   mix:5
},
ratingCount:{
         type:"string"
},
code:{
    type:"string"
},
coords:{
id:{type:"string"},
latitude:{type:"Number"},
latitudeDelta:{type:"Number"},
logitude:{type:"Number"},
logitudeDelta:{type:"Number"},
address:{type:"string"},
title:{type:"string"}
}

},


{
    timestamps:true
    
});

// module.exports = mongoose.model('User',ResturentModelSchema);

const  ResturentModel = mongoose.model('ResturentModel ',ResturenSchema  );

module.exports = ResturentModel;