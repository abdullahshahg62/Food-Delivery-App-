const userModel = require("../model/user_model.js")


const UserController = async (req, res) => {
    console.log(req.body._id)
  try {
    // find User
    const user = await userModel.findById(req.body.id);

    
console.log("user",user)
    // valedation 
    if(!user){
        return res.status(404).send({
            success:false,
            message:"User Not Found"
        })
    }
    // password hide
    user.password = undefined
    // responce
    res.status(201).send({
        success:true,
        message:"User get successfully",
        user
    })
     
  } catch (error) {
      console.log("Show my error", error);
      res.status(500).send({ 
        success: false,
         message: 'An error occurred',
          error 
        });
  }
};

module.exports =  UserController;