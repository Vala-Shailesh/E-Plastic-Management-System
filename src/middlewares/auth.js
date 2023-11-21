const jwt = require('jsonwebtoken');
// const cookieParser = require('cookie-parser');

// get data form database
const Registration = require("../db/registrationSchema");
const { use } = require('../Routers/register');

// create a function or middleware that verify user cookie are right or worng

const auth = async (req,res,next) => {

     try{
          if( req.cookies.jwt === undefined){
               console.log(req.url);
               if( req.url === "/activity"){
                    return res.status(201).render("activity",{
                         role : "none"
                    });
               }
               res.status(201).render("index");
          }
          else{
               // get user token 
               const token = req.cookies.jwt;
               console.log(`Inside middleware user cookie is -> ${token}`);
               
               // now verify token using our secret key 
               const verifiedToken = await jwt.verify( token, "abcdefghijklmnopqurstuvwxyzabcdefghijklmnopqurstuvwxyz");
               console.log(verifiedToken);
               
               // get data form database's
               const userData = await Registration.findOne({ _id : verifiedToken._id});
               console.log(userData);
               
               // pass userDeta to main request function
               req.body.userData = userData;
               
               // pass process to next middleware or funciton
               next();
          }
     }
     catch(err){
          console.log(`Server are brake work dur to -> ${err}`);
          res.status(201).render("index");
     }
}

// export auth
module.exports = auth;