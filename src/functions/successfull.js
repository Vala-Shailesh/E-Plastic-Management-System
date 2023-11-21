// import nodemailer for sent a gmail
const nodemailer = require("nodemailer");

// import gmail generate for better mail themes
const mailgen = require('mailgen');
// const { models } = require("mongoose");

const registrationEmail = (req) => {

     const { regisUserEmail, regisPassword } = req.body;

     // create a transporter for sent a mail
     const transporter = nodemailer.createTransport({
          service : "gmail",
          auth : {
               user : "valashailesh111@gmail.com",
               pass : "otoyohjqbkyqfokn"
          }
     });

     // create a mail themes using mailgen
     let MailGenerator = new mailgen({
          theme : "default",
          product : {
               name : "EMPS",
               link : 'http://localhost:8888/index'
          }
     });

     //create a mail body with content
     let mailBody = {
          body : {
               name : "Welcome to EMPS ✌️",
               intro : `Our first priority to give complete satisfaction to user. <br/> Your successfully registration into our web-site With ${regisUserEmail} using a Password "${regisPassword}"`,
               outro : "I hope you resive right respose..!"
          }
     }

     let mail = MailGenerator.generate(mailBody);

     //create a mail body with content
     const message = {
          form : "valashailesh111@gmail.com",
          to : regisUserEmail,
          subject : "Registration Successfully",
          html : mail
          // html :` <h1 style='color : green;'> Successfully </h1> <h3> Your successfully registration into our web-site <br/> With ${regisUserEmail} using a Password ${regisPassword} </h3>`
     }
     
     // sent a mail
     transporter.sendMail(message).then( () => {
          console.log(`Mail are sent successfully to given mail id : ${regisUserEmail} `);
     }).catch( err => {
          console.log("Mail are not sent to given id dut to this error..");
          console.log(err);
     });
     
}
     
module.exports = registrationEmail;