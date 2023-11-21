const express = require('express');
const path = require('path');

//database schema
const Registration = require("../db/registrationSchema");

// create a express router 
const router = express.Router();

// data object

// create a our middleware 
const middleware = (req,res,next) => {
     console.log(req.body.role);
     module.exports.data = req.body.role;
     next();
}

// login authontication code
router.post("/login", middleware ,async (req,res) => {
     try{
          // gete data form user
          const role = req.body.role;
          const name =  req.body.loginUserName;
          const password =  req.body.loginPassword;

          // export role 
          // module.exports = role;

          // get data form database
          const fetchedData = await Registration.findOne({ role : role, name : name , password : password});

          // generate output
          if( fetchedData === undefined ){
               // res.status(500).send("data are not found");
               res.status(500).render("index",{
                    display: "block",
                    color : "red"
               });
          }
          else{

               // create a token 
               const token = await fetchedData.generateToken();
               console.log(token);

               // add token into cookies
               res.cookie( "jwt", token, {
                    expires : new Date( Date.now() + 6000000),
                    httpOnly : true
               });

               console.log(fetchedData);
               console.log("login successfully");
               console.log();
               res.status(201).render("home", {
                    role : role
               });

               // export login data
               // userData =  await fetchedData;

               // if( fetchedData.role === role && fetchedData.name === name && fetchedData.password === password){
               //      console.log(fetchedData);
               //      console.log("login successfully");
               //      console.log();
               //      res.status(201).render("home");
               // }
               // else{
               //      res.status(500).send("index",{
               //           display: "block",
               //           color : "red"
               //      });
               // }
          }
     }
     catch(err){
          console.log("Server are facing this problem -> ", err);
          res.status(500).send(" invalid data !!");
     }
     
     // console.log(userData);
});

// module.exports.data = userData;

module.exports.loginRouter = router;