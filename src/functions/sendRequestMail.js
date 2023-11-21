const nodemailer = require('nodemailer');
const mailgen = require('mailgen');

const sendRequestMail = (req) => {

     // get email from requset object
     const userEmail = req.body.email;

     // first create transpoter
     const transporter = nodemailer.createTransport({
          service : "gmail",
          auth : {
               user : "valashailesh111@gmail.com",
               pass : "otoyohjqbkyqfokn"
          }
     });

     // create a mail using mailgen
     const MailGenerator = new mailgen({
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
               intro : `<h1 style='color: green;'> Requset Recived </h1><br/> , <p> We have recive your send request and as soon as posible we can try to completed in short time. </p>`,
               outro : "Have Nice day..!"
          }
     }

     let mail = MailGenerator.generate(mailBody);

     //create a mail body with content
     const message = {
          form : "valashailesh111@gmail.com",
          to : userEmail,
          subject : "Your request are Recived Successfully",
          html : mail
          // html :` <h1 style='color : green;'> Successfully </h1> <h3> Your successfully registration into our web-site <br/> With ${regisUserEmail} using a Password ${regisPassword} </h3>`
     }

     console.log( "Mail that can be sher with user's --> /n" + message);

     // sent a mail
     transporter.sendMail(message).then( () => {
          console.log(`Mail are sent successfully to given mail id : ${userEmail}`);
     }).catch( err => {
          console.log("Mail are not sent to given id dut to this error..");
          console.log(err);
     });
}

module.exports = sendRequestMail;