const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
    },
    
    email: {
        type: String,
        required: true,
        unique: true,
       
    },
    password: {
        type: String,
        required:[true,"passwerd is required"]
    },
    address:{
       type: Array,   
    },
    phoneNumber:{
    type :"string",
    required:[true,"phoneNumber is required"]
    },
    usertype: {
        type: "string",
        required:[true,"usertype is required "],
        default:"client",
        enam:['clint','admain','vendor','driver']

    },
    profile:{
        type:"string",
        default:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fprofile-image&psig=AOvVaw0NvXTygBEsrIipDElyOhkQ&ust=1729853603940000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCPDnjYHtpokDFQAAAAAdAAAAABAY"
    },
    
        answer:{
        type:"string",
        required:[true,"Answer is required"]
        }
    },


{
    timestamps:true
    
}
);
// module.exports = mongoose.model('User',userSchema);

const userModel = mongoose.model('userModel', userSchema);

module.exports = userModel;