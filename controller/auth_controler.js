const userModel = require("../model/user_model.js")
const bcrypt = require('bcrypt');

const Register =async (req,res)=>{
try {
const {userName,email,password,address,phoneNumber,answer}=req.body

// Validation 
if(!userName||!email||!password||!address||!phoneNumber||!answer){
    return res.status(500).send({
        success:false,
        message:"Please provide all field"
    })
  }
//   hashingg password
  var salt=bcrypt.genSaltSync(10);
const hashpassword = await bcrypt.hash(password,salt)

  // check user
const existing = await userModel.findOne({email})
if(existing){
    return res.status(500).send({
        success:false,
        message:"Email is All Ready Existing "
    })
}
// Create New user
const user = await userModel.create({
    userName,
    email,
    password:hashpassword,
    address,
    phoneNumber,
    answer
});
res.status(201).send({user})
}
catch (error){
    console.log(error)
    res.status(500).send({
        success:false,
        message:"thir is some arror in your register Rout",
        error
    })

}
}

module.exports={
    Register
}