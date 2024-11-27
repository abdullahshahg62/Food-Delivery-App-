const userModel = require("../model/user_model.js")
const bcrypt = require('bcrypt');

// Rest password

const resetpassword = async(req,res)=>{
    try{
        const { email , newPassword , answer }=req.body

if( !email || !newPassword ||!answer ){
return res.status(500).send({
success:false,
message:"Please provide All field"
})
}
const user = await userModel.findOne({email,answer})
if(!user){
    return res.status(500).send({
        success:false,
        message:"User Not Found Inviled answer"
    })
}
// hash Passworde
 var salt=bcrypt.genSaltSync(10);
const hashpassword = await bcrypt.hash(newPassword,salt)
user.password = hashpassword
await user.save()

 res.status(200).send({
    success:true,
    message:"Password reset successfully"
})

    }
catch(error){
console.log(error);
 res.status(500).send({
    success:false,
    message:"Error in Reset Passworde",
    error
});
    }
}
module.exports={
    resetpassword
}