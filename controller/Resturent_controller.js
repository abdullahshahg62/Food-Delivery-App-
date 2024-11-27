const ResturentModel = require("../model/Resturent_Model");


const ResturentController = async (req, res) => {
    try {
        const { title, 
            imageUrl,
             foods, 
            time,
             pickup, 
            delivery,
             isOpen,
             logUrl,
             rating, 
            ratingCount, 
            code, 
            coords 

        } = req.body;
        // Validation 
if(!title || !coords){
   return res.status(500).send({
        success: false,
        message: 'Please provide title and address',
        
    });
};
const NewResturent = new ResturentModel({
           title, 
            imageUrl,
             foods, 
            time,
             pickup, 
            delivery,
             isOpen,
             logUrl,
             rating, 
            ratingCount, 
            code, 
            coords, 
   })
await NewResturent.save()
res.status(201).send({
    success:true,
    message:"new Resturent is successfully Created"
})
    }
    catch (error) {
        console.log("Show my error", error);
        res.status(500).send({
            success: false,
            message: 'Error in Resturent Controll system',
            error
        });
    }
};
// Get all Resturent Controller

const GetAllResturent = async(req,res)=>{
try{
const resturents= await ResturentModel.find({})
if (!resturents){
    return res.status(404).send({
        success:false,
        message:"No resturent Avilabel"
    });
}
res.status(201).send({
    success: true,
    totalCount:resturents.length,
    resturents

})
}catch (error) {
    console.log("Show my error", error);
    res.status(500).send({
        success: false,
        message: 'Error in Get All Resturent Controll Api',
        error
    });
}
}



module.exports = {ResturentController,GetAllResturent};