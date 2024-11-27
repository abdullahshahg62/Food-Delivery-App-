const express = require ('express');
const UpdateUser = require('./Routes/update_user.js')
const RegisterRout = require ('./Routes/Registration_rout.js');
const loginForm = require ('./Routes/login_rout.js');
const UserRoutes = require ('./Routes/user_route.js');
const Resetpassword =require('./Routes/reset_passworde.js')
const DeleteAccount = require('./Routes/Delete_Account.js')
const Resturent = require('./Routes/Resturent_routs.js')
const Categore = require("./Routes/category_routs.js")
const  FOODs =require('./Routes/Food_rout.js')
const connectDb = require ('./config/database.js');




const dotenv = require('dotenv')

dotenv.config({
    path: "./home.env"
})

// Initialize Express app
const app = express();

// Middleware
app.use(express.json());

// Use Routes with specific paths

app.use('/regis', RegisterRout);
app.use('/login', loginForm);
app.use('/user', UserRoutes); 
app.use('/updateUser',UpdateUser)
app.use('/resetpassword',Resetpassword)
app.use('/deleteaccount',DeleteAccount)
app.use("/resturent",Resturent)
app.use("/category",Categore );
app.use("/food",FOODs );

// Connect Database
connectDb();

// Set up port
const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, () => {
    console.log( `Server is running on port ${PORT}`);
});

