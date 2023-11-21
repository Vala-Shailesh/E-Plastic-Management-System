const express = require('express');
const path = require('path');

//database schema
const Registration = require("../db/registrationSchema");

// get mail sent controller
const registrationEmail = require('../functions/successfull');

// create an express router
const router = express.Router();

// hander registration event with post method
router.post("/register" , async (req,res) => {
     try{
          const password = req.body.regisPassword;
          const confirmPassword = req.body.regisConfirmPassword;

          console.log(password, req.body.regisUserConnectNo);

          // checking both password are right or worng
          if( password === confirmPassword ){
               
               console.log(req.body);
               const data = new Registration({
                    role : req.body.role,
                    name : req.body.regisUserName,
                    email : req.body.regisUserEmail,
                    connectNo : req.body.regisUserConnectNo,
                    password : req.body.regisPassword
               });
               // console.log(data);

               // create a token 
               const token = await data.generateToken();
               console.log(token);

               // add token into cookies
               res.cookie( "jwt", token, {
                    expires : new Date( Date.now() + 60000),
                    httpOnly : true
               });

               const addData = await data.save();

               // sent a conform mail
               await registrationEmail(req);

               res.status(200).render("index",{
                    res : { display : "none"},
                    validation : "flex"
               });
               // res.status(201).sendFile(path.join(__dirname, "../HTML/index.html"));
          }
          else{
               return res.status(201).render("index", {
                    invalidation : "flex"
               });
          }
     }
     catch( err ){
          res.status(404).render("index",{
               res : { display: "block" }
          });
          console.log(" Server are face this problem -> " , err);
     }
});

module.exports = router;