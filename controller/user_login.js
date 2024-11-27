const userModel = require("../model/user_model");
const bcrypt = require('bcrypt');
const JWT=require('jsonwebtoken');


const loginForm = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(500).send({
                success: false,
                message: "Please provide the email and password"
            });
        }

        // check user
        const user = await userModel.findOne({ email});
        if (!user) {
            return res.status(404).send({
                success: false,
                message: "User not found"
            });
        }
        // comper password ||user passsword

        const isMatch = await bcrypt.compare(password, user.password)
        if(!isMatch){
            return res.status(500).send({
                success:false,
                message:"Invilade your password"
            })
        }
// jwt Tokan ||
const Tokan = JWT.sign({id: user._id},process.env.SECRET_KEY,{
 expiresIn:'7d'
})
        user.password=undefined;

        res.status(200).send({
            success: true,
            message: "Successfully logged into your account",
            Tokan,
            user
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "There is some error in your loginForm route",
            error
        });
    }
};

module.exports = {
    loginForm   
};
