
const userModel = require("../model/user_model.js")

const DeleteAccount = async(req,res)=>{
try{

const deleteUser = await userModel.findByIdAndDelete(req.query.id)
console.log("deleete......",deleteUser)
if(deleteUser){
    return res.status(200).send({
        success:true,
        message:"Your account is successfully Delete"
     })
}
 
}
catch(error){
console.log("error",error)
return res.status(500).send({
    success:false,
    message:"User Account Not delete"
})
}
     }
module.exports={
    DeleteAccount
}