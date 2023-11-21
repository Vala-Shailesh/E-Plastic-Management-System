// get required package
const nodemailer = require('nodemailer');
const mailgen = require('mailgen');

// generate OTP
const generateOTP = () => {
     const char = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
     const otpLength = 5;
     let OTP = "";

     for(let i=0; i<otpLength; i++){
          const index = Math.floor(Math.random()*char.length);
          OTP += char[index];
     }
     return OTP;
}

const sendOTP = async (userEmail,res) => {

     // generate otp
     const otp = generateOTP();

     // first create transpoter
     const transporter = nodemailer.createTransport({
          service : "gmail",
          auth : {
               user : "valashailesh111@gmail.com",
               pass : "otoyohjqbkyqfokn"
          }
     });

     // create a mail using mailgen
     let MailGenerator = new mailgen({
          theme : "default",
          product : {
               name : "EMPS",
               link : 'http://localhost:8888/'
          }
     });

     //create a mail body with content
     let mailBody = {
          body : {
               name : " ",
               intro : `<h1> Password Reset OTP </h1><br/>Your email id : ${userEmail} and respecting <br/> OTP : <h3>${otp}</h3> <br/> Don't give a OTP with other and also it valid for 10 mint`,
               outro : "I hope you resive right respose..!"
          }
     }

     let mail = MailGenerator.generate(mailBody);

     //create a mail body with content
     const message = {
          form : "valashailesh111@gmail.com",
          to : userEmail,
          subject : "Reset Password !",
          html : mail
          // html :` <h1 style='color : green;'> Successfully </h1> <h3> Your successfully registration into our web-site <br/> With ${regisUserEmail} using a Password ${regisPassword} </h3>`
     }

     // sent a mail
     transporter.sendMail(message).then( () => {
          // res.OTP = otp;
          // res.status(201).json({
          //      msg : `Mail are sent to ${userEmail} with OTP : ${otp}`
          // });
          console.log(`Mail are sent successfully to given mail id : ${userEmail} and OTP : ${otp}`);
     }).catch( err => {
          // res.status(501).json({
          //      msg : `Mail are not sent to ${userEmail} but OTP is a  ${otp}`
          // });
          console.log("Mail are not sent to given id dut to this error..");
          console.log(err);
     });

     return otp;
}

module.exports = sendOTP;