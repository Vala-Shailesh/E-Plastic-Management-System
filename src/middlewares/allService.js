const ServiceData = require('../db/serviceSchem');

const allService = async (req,res,next) => {

     // first check auth user have prious data or not
     // console.log(priousData);
     console.log(req.body.userData._id); 
     const priousData = await ServiceData.find({ id : req.body.userData._id});
     const numberOfData = await ServiceData.find({ id : req.body.userData._id}).count();

     console.log(` old user service data --> ${priousData}`);
     console.log(` old user number of service data --> ${numberOfData}`);

     // set result to res object
     req.body.numberOfOldData = numberOfData;
     req.body.priousData = priousData;

     // pass control to next function
     next();
}

module.exports = allService;