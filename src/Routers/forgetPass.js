const router = require('express').Router();

// get database file
const Registration = require('../db/registrationSchema');

// get sendOTP function
const sendOTP = require("../functions/sendOTP");

router.get("/", (req,res) => {
     console.log(req.url);
     res.status(200).render("forgetPassword");
});

router.post("/otp", async (req,res) => {
     console.log(` inside otp request -> ${req.url}`);
     console.log(req.body.email);
     // sent a otp mail

     const otp = await sendOTP(req.body.email,res);
     res.status(200).render("changePassword",{
          otp : otp,
          email : req.body.email
     });

});

router.post("/resetPassword", async (req,res) => {
     console.log(` inside otp request -> ${req.url}`);
      
     try{
          console.log(req.body.password);
          console.log(req.body.email);
          if( req.body.password === req.body.confirmPassword){
               
               // get data form a database's
               const result = await Registration.findOneAndUpdate({ email : req.body.email }, {
                    $set : {
                         password : req.body.password
                    }
               });
               
               // give response to client
               res.status(201).render("index");
          }
          else{
               res.status(201).json({
                    msg : "worng password !!"
               })
          }
     }
     catch(err){
          res.status(404).render("error");
     }
});

router.post("/otp/verify", (req,res) => {
     console.log(req.url);
});

module.exports = router;