// add user's database file's
const CustomerDetail = require('../db/userDetailSchem');
const WorkerDetail = require('../db/workerDetailSchema');
const IndustryDetail = require('../db/industryDetailsSchema');

// create a middleware that can be fetc data from a database base on user id 
const getData = async (req,res,next) => {
     try{

          // first find a role of user
          const role = req.body.userData.role;
          console.log(role);
          if( role === "customer"){
               const data = await CustomerDetail.find({ id : req.body.userData._id });
               req.body.getData = data[0];
               // console.log(" working right -> ",req.body.getData);
          }
          else if( role === "worker"){
               const data = await WorkerDetail.find({ id : req.body.userData._id });
               req.body.getData = data[0];
          }
          else if( role === "industry"){
               const data = await IndustryDetail.find({ id : req.body.userData._id });
               req.body.getData = data[0];
          }
          else{
               console.log("Database not contain any prious data for this user....!");
          }
          console.log(`getData is -> ${req.body.getData}`);
          next();
     }
     catch( err ){
          console.log(`Server are down due to this erroe -> ${err}`);
          res.status(404).render("index");
     }
}

module.exports = getData;