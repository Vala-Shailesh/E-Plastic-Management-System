const express = require('express');
const auth = require("../middlewares/auth");
const getData = require("../middlewares/getData");

// import cookie-parser for get cookie form a user browser
const cookieParser = require('cookie-parser');

//database schema
const Registration = require("../db/registrationSchema");
const CustomerDetail = require("../db/userDetailSchem");
const WorkerDetail = require("../db/workerDetailSchema");
const IndustryDetail = require("../db/industryDetailsSchema");

// const data = userData.data;

const router = express.Router();

router.get("/", auth , getData ,(req,res) => {
     console.log( req.url);
     const condition = req.body.getData;
     // console.log(typeof(condition), `and data is ${req.body.getData}`);
     if( req.body.getData !== undefined ){
          const detail = req.body.userData.role;
          console.log(`Inside a proflie funtion ->  ${detail}`);
          
          // get cookie form a user 
          // console.log(req.cookies.jwt);
          
          // some controle point's
          let role = req.body.userData.role;
          const gender = req.body.getData.gender; 
          
          console.log(role, gender);
          
          res.status(200).render("profile", {
               user : req.body.getData,
               role : req.body.userData.role
          });
     }
     else{
          console.log( " userData -> ", req.body.userData);
          return res.status(200).render("profile", {
               user : req.body.userData,
               role : req.body.userData.role
          });
     }
});

router.post("/", auth, getData , async (req,res) => {
     // console.log(req.body);
     console.log( " Request data -> ", req.body);

     try{
          // first check given data are present in database or not !
         if(req.body.getData === undefined){

          //     console.log(req.body.getData.role);
              if ( req.body.userData.role === "customer"){
                   // create a database collection object
                   const userDetails = new CustomerDetail({
                         id : req.body.userData._id,
                         role : req.body.role,
                         name : req.body.userName,
                         gender : req.body.userGender,
                         email : req.body.userEmail,
                         connectNo : req.body.userConnectNo,
                         address : req.body.userAddress,
                         workType : req.body.workType,
                         workDetails : req.body.workDetails,
                         workConnectNo : req.body.workConnectNo,
                         workEmail : req.body.workEmail,
                         workAddress : req.body.workAddress,
                         plasticType : req.body.plasticType,
                         plasticWest : req.body.plasticWest
                    });
                    console.log(userDetails);

                    // save into database
                    const result = await userDetails.save();
                    req.body.result = result;
               }          
               if( req.body.userData.role === "worker"){
                    // create a database collection object
                    const userDetails = new WorkerDetail({
                         id : req.body.userData._id,
                         role : req.body.role,
                         name : req.body.userName,
                         gender : req.body.userGender,
                         email : req.body.userEmail,
                         connectNo : req.body.userConnectNo,
                         address : req.body.userAddress,
                         workerDepartment : req.body.workerDepartment,
                         workerEducation : req.body.workerEducation,
                         workerExperience : req.body.workerExperience,
                         salary : req.body.salary,
                         oldJob : req.body.oldJob
                    });
                    console.log(userDetails);

                    // save into database
                    const result = await userDetails.save();
                    req.body.result = result;

               }
               if( req.body.userData.role === "industry"){
                    // create a database collection object
                    const userDetails = new IndustryDetail({
                         id : req.body.userData._id,
                         role : req.body.role,
                         name : req.body.userName,
                         gender : req.body.userGender,
                         email : req.body.userEmail,
                         connectNo : req.body.userConnectNo,
                         address : req.body.userAddress,
                         industryName : req.body.industryName,
                         industryEmail : req.body.industryEmail,
                         industryMoblieNo : req.body.industryMoblieNo,
                         industryPlasticType : req.body.industryPlasticType,
                         industryAccepedPlastic : req.body.industryAccepedPlastic
                    });
                    console.log(userDetails);

                    // save into database
                    const result = await userDetails.save();
                    req.body.result = result;

               }
          }
          else{
               if( req.body.getData.role === "customer"){
                    // update a customer data
                    console.log(req.body.getData);
                    const result = await CustomerDetail.findByIdAndUpdate({_id : req.body.getData._id}, {
                         $set : {
                              id : req.body.userData._id,
                              role : req.body.role,
                              name : req.body.userName,
                              gender : req.body.userGender,
                              email : req.body.userEmail,
                              connectNo : req.body.userConnectNo,
                              address : req.body.userAddress,
                              workType : req.body.workType,
                              workDetails : req.body.workDetails,
                              workConnectNo : req.body.workConnectNo,
                              workEmail : req.body.workEmail,
                              workAddress : req.body.workAddress,
                              plasticType : req.body.plasticType,
                              plasticWest : req.body.plasticWest
                         }
                    }, {
                         new : true,
                         useFindAndModify : false
                    } );
                    // print updated data
                    console.log("after updated data -> ",result);
                    req.body.result = result;

               }
               if( req.body.getData.role === "worker"){
                    // update a customer data
                    const result = await WorkerDetail.findByIdAndUpdate({_id : req.body.getData._id}, {
                         $set : {
                              id : req.body.userData._id,
                              role : req.body.role,
                              name : req.body.userName,
                              gender : req.body.userGender,
                              email : req.body.userEmail,
                              connectNo : req.body.userConnectNo,
                              address : req.body.userAddress,
                              workerDepartment : req.body.workerDepartment,
                              workerEducation : req.body.workerEducation,
                              workerExperience : req.body.workerExperience,
                              salary : req.body.salary,
                              oldJob : req.body.oldJob
                         }
                    }, {
                         new : true,
                         useFindAndModify : false
                    } );
                    // print updated data
                    console.log(result);
                    req.body.result = result;

               }
               if( req.body.getData.role === "industry"){
                    // update a customer data
                    const result = await IndustryDetail.findByIdAndUpdate({_id : req.body.getData._id}, {
                         $set : {
                              id : req.body.userData._id,
                              role : req.body.role,
                              name : req.body.userName,
                              gender : req.body.userGender,
                              email : req.body.userEmail,
                              connectNo : req.body.userConnectNo,
                              address : req.body.userAddress,
                              industryName : req.body.industryName,
                              industryEmail : req.body.industryEmail,
                              industryMoblieNo : req.body.industryMoblieNo,
                              industryPlasticType : req.body.industryPlasticType,
                              industryAccepedPlastic : req.body.industryAccepedPlastic
                         }
                    }, {
                         new : true,
                         useFindAndModify : false
                    } );
                    // print updated data
                    console.log(result);
                    req.body.result = result;
               }
          }

          console.log(req.body.role);
          // sent a response
          res.status(201).render("profile", {
               user : req.body.result,
               role : req.body.result.role
          });
     }
     catch( err ){
          res.status(404).render("error");
          console.log(`Server are cresh due to this error -> ${err}`);
     }
});

module.exports = router;