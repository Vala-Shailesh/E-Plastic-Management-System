console.log("Server are ready to give response....");

const http = require('http');
const fs = require('fs');

const app = http.createServer( (req,res) => {
     if( req.url === "/"){
          // read html file using fs bulit-in modul's
          // const index  = fs.readFile("../HTML/index.html", (err, data ) => {
          //      if(err){
          //           console.log("Server are destory for this problem : ",err);
          //      }
          // });
          
          console.log("client are coming...");
          res.writeHead( 200, { "Content-Type" : "text/html"});
          // res.write(index);

          // sent file as pipe-line
          fs.createReadStream("../HTML/index.html").pipe(res);
          // res.pipe(index);
          // res.write("<h1> Welcome my first full stack app </h1>");
          // res.end(); // because of above code run asyn manner
     }

     // all htnl page's service's
     else if(req.url === '/home.html'){
          res.writeHead( 200 , { "Content-Type" : "text/html"});
          fs.createReadStream('../HTML/home.html').pipe(res);
          // res.end();
     }
     else if(req.url === '/activity.html'){
          res.writeHead( 200 , { "Content-Type" : "text/html"});
          fs.createReadStream('../HTML/activity.html').pipe(res);
          // res.end();
     }
     else if(req.url === '/content.html'){
          res.writeHead( 200 , { "Content-Type" : "text/html"});
          fs.createReadStream('../HTML/content.html').pipe(res);
          // res.end();
     }
     else if(req.url === '/profile.html'){
          res.writeHead( 200 , { "Content-Type" : "text/html"});
          fs.createReadStream('../HTML/profile.html').pipe(res);
          // res.end();
     }
     else if(req.url === "/service.html"){
          res.writeHead( 200 , { "Content-Type" : "text/html"});
          fs.createReadStream('../HTML/service.html').pipe(res);
          // res.end();
     }

     // all customer html page's
     else if(req.url === "/Customer/addService.html"){
          res.writeHead( 200, { "Content-Type" : "text/html" });
          fs.createReadStream("../HTML/Customer/addService.html").pipe(res);
          // res.end();
     }
     else if(req.url === "/Customer/currentService.html"){
          res.writeHead( 200, { "Content-Type" : "text/html" });
          fs.createReadStream("../HTML/Customer/currentService.html").pipe(res);
          // res.end();
     }
     else if(req.url === "/Customer/oldService.html"){
          res.writeHead( 200, { "Content-Type" : "text/html" });
          fs.createReadStream("../HTML/Customer/oldService.html").pipe(res);
          // res.end();
     }
      // all worker html page's
      else if(req.url === "/Worker/workerCurrentService.html"){
          res.writeHead( 200, { "Content-Type" : "text/html" });
          fs.createReadStream("../HTML/Worker/workerCurrentService.html").pipe(res);
          // res.end();
     }
     else if(req.url === "/Worker/workerCancelledService.html"){
          res.writeHead( 200, { "Content-Type" : "text/html" });
          fs.createReadStream("../HTML/Worker/workerCancelledService.html").pipe(res);
          // res.end();
     }
     else if(req.url === "/Worker/workerCompaletedService.html"){
          res.writeHead( 200, { "Content-Type" : "text/html" });
          fs.createReadStream("../HTML/Worker/workerCompaletedService.html").pipe(res);
          // res.end();
     }

     // all stylesheet send to client from a server with their according reqiurment's

     else if(req.url === "/CSS/stylesheet.css"){
          const stylesheet = fs.readFileSync("../CSS/stylesheet.css");
          res.writeHead( 200 , { "Content-Type" : "text/css"});
          res.write(stylesheet);
          // fs.createReadStream("../HTML/home.html").pipe(res);
          res.end();
     }
     else if(req.url === "/CSS/commanStyle.css"){
          const stylesheet = fs.readFileSync("../CSS/commanStyle.css");
          res.writeHead( 200 , { "Content-Type" : "text/css"});
          res.write(stylesheet);
          // fs.createReadStream("../HTML/home.html").pipe(res);
          res.end();
     }
     else if(req.url === "/CSS/activity.css"){
          const stylesheet = fs.readFileSync("../CSS/activity.css");
          res.writeHead( 200 , { "Content-Type" : "text/css"});
          res.write(stylesheet);
          // fs.createReadStream("../HTML/home.html").pipe(res);
          res.end();
     }
     else if(req.url === "/CSS/content.css"){
          const stylesheet = fs.readFileSync("../CSS/content.css");
          res.writeHead( 200 , { "Content-Type" : "text/css"});
          res.write(stylesheet);
          // fs.createReadStream("../HTML/home.html").pipe(res);
          res.end();
     }    
     else if(req.url === "/CSS/enditionProfile.css"){
          const stylesheet = fs.readFileSync("../CSS/enditionProfile.css");
          res.writeHead( 200 , { "Content-Type" : "text/css"});
          res.write(stylesheet);
          // fs.createReadStream("../HTML/home.html").pipe(res);
          res.end();
     }
     else if(req.url === "/CSS/form.css"){
          const stylesheet = fs.readFileSync("../CSS/form.css");
          res.writeHead( 200 , { "Content-Type" : "text/css"});
          res.write(stylesheet);
          // fs.createReadStream("../HTML/home.html").pipe(res);
          res.end();
     }
     else if(req.url === "/CSS/mediaQuery.css"){
          const stylesheet = fs.readFileSync("../CSS/mediaQuery.css");
          res.writeHead( 200 , { "Content-Type" : "text/css"});
          res.write(stylesheet);
          // fs.createReadStream("../HTML/home.html").pipe(res);
          res.end();
     }
     else if(req.url === "/CSS/profile.css"){
          const stylesheet = fs.readFileSync("../CSS/profile.css");
          res.writeHead( 200 , { "Content-Type" : "text/css"});
          res.write(stylesheet);
          // fs.createReadStream("../HTML/home.html").pipe(res);
          res.end();
     }
     else if(req.url === "/CSS/profileMediaQuery.css"){
          const stylesheet = fs.readFileSync("../CSS/profileMediaQuery.css");
          res.writeHead( 200 , { "Content-Type" : "text/css"});
          res.write(stylesheet);
          // fs.createReadStream("../HTML/home.html").pipe(res);
          res.end();
     }
     else if(req.url === "/CSS/service.css"){
          const stylesheet = fs.readFileSync("../CSS/service.css");
          res.writeHead( 200 , { "Content-Type" : "text/css"});
          res.write(stylesheet);
          // fs.createReadStream("../HTML/home.html").pipe(res);
          res.end();
     }

     
     // all javasrcipt file's
     
     else if(req.url === "/JavaScript/form.js"){
          const stylesheet = fs.readFileSync("../JavaScript/form.js");
          res.writeHead( 200 , { "Content-Type" : "text/js "});
          res.write(stylesheet);
          // fs.createReadStream("../HTML/home.html").pipe(res);
          res.end();
     }
     else if(req.url === "/JavaScript/popUpBox.js"){
          const stylesheet = fs.readFileSync("../JavaScript/popUpBox.js");
          res.writeHead( 200 , { "Content-Type" : "text/html      "});
          res.write(stylesheet);
          // fs.createReadStream("../HTML/home.html").pipe(res);
          res.end();
     }
     else if(req.url === "/JavaScript/service.js"){
          const stylesheet = fs.readFileSync("../JavaScript/service.js");
          res.writeHead( 200 , { "Content-Type" : "text/html      "});
          res.write(stylesheet);
          // fs.createReadStream("../HTML/home.html").pipe(res);
          res.end();
     }
     
     // all images serve by server
     else if(req.url === "/Images/Favicon/epms.png"){
          const plasticWest = fs.readFileSync("../Images/Favicon/epms.png");
          res.writeHead( 200 , { "Content-Type" : "text/image"});
          res.write(plasticWest);
          // fs.createReadStream("../HTML/home.html").pipe(res);
          res.end();
     }
     else if(req.url === "/Images/Plastic-Waste-Management-Rules.jpg"){
          const plasticWest = fs.readFileSync("..//Images/Plastic-Waste-Management-Rules.jpg");
          res.writeHead( 200 , { "Content-Type" : "text/image"});
          res.write(plasticWest);
          // fs.createReadStream("../HTML/home.html").pipe(res);
          res.end();
     }
     else if(req.url === "/Images/Plastic-cycle-removebg-preview.png"){
          const plasticCycleWithoutBg = fs.readFileSync("..//Images/Plastic-cycle-removebg-preview.png");
          res.writeHead( 200 , { "Content-Type" : "text/image"});
          res.write(plasticCycleWithoutBg);
          // fs.createReadStream("../HTML/home.html").pipe(res);
          res.end();
     }
     else if(req.url === "/Images/epms-removebg-preview.png"){
          const epmsWithoutBg = fs.readFileSync("../Images/epms-removebg-preview.png");
          res.writeHead( 200 , { "Content-Type" : "text/png "});
          res.write(epmsWithoutBg);
          // fs.createReadStream("../HTML/home.html").pipe(res);
          res.end();
     }
     else if(req.url === "/Images/epms.png"){
          const empsImage = fs.readFileSync("../Images/epms.png");
          res.writeHead( 200 , { "Content-Type" : "text/png "});
          res.write(empsImage);
          // fs.createReadStream("../HTML/home.html").pipe(res);
          res.end();
     }
     else if(req.url === "/Images/profile-defult-image.png"){
          const profileImage = fs.readFileSync("../Images/profile-defult-image.png");
          res.writeHead( 200 , { "Content-Type" : "text/png "});
          res.write(profileImage);
          // fs.createReadStream("../HTML/home.html").pipe(res);
          res.end();
     }
     else if(req.url === "/Images/R.jpg"){
          const stylesheet = fs.readFileSync("../Images/R.jpg");
          res.writeHead( 200 , { "Content-Type" : "text/png "});
          res.write(stylesheet);
          // fs.createReadStream("../HTML/home.html").pipe(res);
          res.end();
     }

     // form request handling code


     // else if( req.url === "/about"){
     //      res.write("<h1> Welcome to About page </h1>");
     //      res.write("<h3> It is a about page and given infomation of about page </h3>");
     //      res.end();
     // }
     else{
          res.write("<div style='position: absolute; left:50%; top:50%; transform: translate(-50%,-50%); color: red;'><h1 style='text-align:center;'> Error are ocuur's </h1> <h3 style='text-align:center;'> Due to page not found this type of error are ocuur's in this server.. </h3></div>");
          res.write("");
          res.end();
     }
});

app.listen(8899, () => { 
     console.log("Server are ready to provide a service on port number 8899....");
});


// const commanStyle = fs.readFileSync("../CSS/commanStyle.css");
// res.write(commanStyle);