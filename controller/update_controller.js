const userModel = require('../model/user_model');
// Update user conntroler
const UpdateUsercontroller = async (req,res)=>{
    try{
        // find user 
        const user = await userModel.findById(req.body.id);
    // Validation 
    if(!user){
    return res.status(404).send({
        success:false,
        message:"User is not found"
      })
        }
        // Update 
        const { userName,address,phoneNumber } = req.body
        if(userName)user.userName=userName
        if(address)user.address = address
        if(phoneNumber)user.phoneNumber=phoneNumber
        await user.save()
        res.status(200).send({
            success:true,
            message:"User Updated Successfully"
        })
    }
     catch(error){
        console.log(error)
    return res.status(500).send({
        success:false,
        message:"User Not Update",
        error
    })
    }
    }
    
    module.exports =  UpdateUsercontroller ;