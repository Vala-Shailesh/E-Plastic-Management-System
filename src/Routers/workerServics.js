const router = require("express").Router();

// access database file
const serviceData = require("../db/serviceSchem");

// access middler funtion
const auth = require("../middlewares/auth");
const allPreviousService = require("../middlewares/allService");
const async = require("hbs/lib/async");
const ServiceData = require("../db/serviceSchem");

// handling get request to this URL
router.get("/currentService", auth, async (req,res) => {
     console.log(req.url);
     console.log(req.body.userData.email);

     if( req.body.userData.email === "jaydeep@456"){
          const data = await serviceData.find({ status : "running"});
          const noOfData = await serviceData.find({ status : "running"}).count();
          res.status(201).render("worker/workerCurrentService", {
               noOfData : noOfData,
               data : JSON.stringify(data),
               role : "worker"
          });;
     }
     else{
          res.status(200).render("Worker/workerCurrentService");
     }
});

router.get("/compaletedService", auth, async (req,res) => {
     console.log(req.url);
     console.log(req.body.userData.email);

     if( req.body.userData.email === "jaydeep@456"){
          const data = await serviceData.find({ status : "accepted"});
          const noOfData = await serviceData.find({ status : "accepted"}).count();
          res.status(201).render("worker/workerCompaletedService", {
               noOfData : noOfData,
               data : JSON.stringify(data),
               role : "worker"
          });;
     }
     else{
          res.status(200).render("worker/workerCompaletedService");
     }
});

router.get("/cancelledService", auth, async (req,res) => {
     console.log(req.url);
     console.log(req.body.userData.email);

     if( req.body.userData.email === "jaydeep@456"){
          const data = await serviceData.find({ status : "cancelled"});
          const noOfData = await serviceData.find({ status : "cancelled"}).count();
          res.status(201).render("worker/workerCancelledService", {
               noOfData : noOfData,
               data : JSON.stringify(data),
               role : "worker"
          });;
     }
     else{
          res.status(200).render("Worker/workerCancelledService");
     }
});

// accepted user service or completing a task
router.post("/acceptService", async (req,res) => {
     console.log(req.url);
     console.log(req.body.serviceId);
     // udate status (status : accepted) of selected data by _id
     // { stauts : { $set : { stauts : "accepted"}}, { _id : req.body.serviceId}
     const data = await ServiceData.updateOne({ _id : req.body.serviceId},
          {  
              $set : {
                    status : "accepted"
               }
          });
     
     // console.log(data);
     if(data !== undefined  ){
          res.status(201).redirect("./currentService");
     }     
});

// remove service from database
router.post("/removeService", async (req,res) => {
     console.log(req.url);
     console.log(req.url.serviceId);
     const data = await ServiceData.updateOne({ _id : req.body.serviceId},
          {  
              $set : {
                    status : "cancelled"
               }
          });

      // console.log(data);
      if(data !== undefined  ){
          res.status(201).redirect("./currentService");
     }    
});

module.exports = router;