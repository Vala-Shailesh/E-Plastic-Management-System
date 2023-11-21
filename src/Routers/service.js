const express = require('express');
const router = express.Router();

// add service database file
const ServiceData = require('../db/serviceSchem');

// add auth user file 
const auth = require("../middlewares/auth");
const allService = require("../middlewares/allService");

// add mail file
const sendRequestMail = require('../functions/sendRequestMail');

router.get("/", (req,res) => {
     console.log(req.url);
     res.status(201).render("service");
});

router.get("/addService" ,(req,res) => {
     console.log(req.url);
     const role = "admin";
     res.status(200).render("./Customer/addService" , {
          role : role
     });
});

router.all("/currentService", auth , allService ,(req,res) => {
     console.log(req.url);
     if(req.body.priousData === "[]"){
          return res.status(200).render("./Customer/currentService");
     }
     // console.log(req.body.priousData);

     // get only ruunong service into database
     const currentService = req.body.priousData.filter( item => {
          return item.status === "running";
     });
     // console.log( " Current Service -> " , currentService);

     // sent a respose to user
     res.status(200).render("./Customer/currentService", {
          numberOfOldData : req.body.numberOfOldData,
          // priousData : req.body.priousData,
          priousData : JSON.stringify(currentService)
     });
});

router.get("/oldService", auth, allService ,(req,res) => {
     console.log(req.url);
     if(req.body.priousData === "[]"){
          return res.status(200).render("./Customer/oldService");
     }
     // res.status(200).render("./Customer/oldService");
     const oldService = req.body.priousData.filter( item => {
          return item.status === "accepted";
     });
     console.log( " Old Service -> " , oldService);

     // sent a respose to user
     res.status(200).render("./Customer/oldService", {
          numberOfOldData : req.body.numberOfOldData,
          // priousData : req.body.priousData,
          priousData : JSON.stringify(oldService)
     });
});

// hander data add request form a addService page
router.post('/addService', auth ,async (req,res) => {
     
     console.log(req.body);

     const newServiceReq = new ServiceData({
          id : req.body.userData._id,
          name : req.body.userName,
          connectNo : req.body.connectNo,
          email : req.body.email,
          address : req.body.workAddress,
          workType : req.body.workType,
          plasticType : req.body.plasticType,
          plasticWeight : req.body.plasticWeight,
          subjectName : req.body.subjectName,
          plasticDetail : req.body.plasticDetail,
          status : "running"
     });

     console.log(newServiceReq);

     // send mail to user 
     if ( newServiceReq !== undefined ){
          await sendRequestMail(req);
     }

     // add into database
     const data = await newServiceReq.save();
     console.log(data);

     // give response to user
     res.status(201).render('./Customer/addService');
});

// for remove service
router.post('/currentService/removeService', async (req,res) => {
     console.log(` request url is ${req.url}`);
     console.log(` request service id  is ${req.body.serviceId}`);

     try{
          const deletedData = await ServiceData.findByIdAndDelete({ _id : req.body.serviceId});
          res.status(201).redirect('../currentService');
     }
     catch( err ){
          console.log(`Server not working due to -> ${err}`);
          res.status(404).render("error");
     }
});

module.exports = router;