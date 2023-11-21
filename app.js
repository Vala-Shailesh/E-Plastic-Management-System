console.log("Express Server are ready to running for this app....");

const express = require('express');
const path = require('path');
const fs = require('fs');
const hbs = require('hbs');
const cookieParser = require('cookie-parser');

// create a one variable that contain all funcionalty of express server (one type of object)
const app = express();

// import middeware 
const auth = require("./src/middlewares/auth");
// ddatabse connection are their function's
require("./src/db/connet");
const Registration = require("./src/db/registrationSchema");

// allow express to accept json data and also work form that
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// register cookie-parser in express server
app.use(cookieParser());

// app.use() method --> use for serve some static response with all type of request
app.use('/', express.static(path.join(__dirname, "./src/static")));

// get uses router
const registerRouter = require("./src/Routers/register");
const {loginRouter} = require("./src/Routers/login");
const indexRouter = require("./src/Routers/index");
const homeRouter = require("./src/Routers/home");
const activityRouter = require("./src/Routers/activity");
const serviceRouter = require("./src/Routers/service");
const workerServiceRouter = require("./src/Routers/workerServics");
const contentRouter = require("./src/Routers/content");
const profileRouter = require("./src/Routers/profile");
const forgetPassRouter = require("./src/Routers/forgetPass");
const logoutRouter = require("./src/Routers/logout");
// const activityRouter = require("./src/Routers/activity");

// register every router in this place
app.use('/',registerRouter);
app.use('/',loginRouter);
app.use('/home',homeRouter);
app.use('/index',indexRouter);
app.use('/activity',activityRouter);
app.use('/service',serviceRouter);
app.use('/workerService',workerServiceRouter);
app.use('/content',contentRouter);
app.use('/profile',profileRouter);
app.use('/forgetPassword',forgetPassRouter);
app.use('/logout',logoutRouter);
// app.use('/activity',activityRouter);

// tell express to use handerbar's then set a view engine and also then path for express
// specify a view engine 
app.set("view engine", "hbs");
app.set("views", "./src/template/views");

// register partial handlbar's in below code
hbs.registerPartials("./src/template/partials");

app.get('/' , (req,res) => {
     console.log(req.url);
     res.status(200).render("index");
     // res.write("<h1> Hello client, I am express server and I server a resource to you want </h1>");
});

app.get('/error', (req,res) => {
     res.status(404).render("error ");
});


app.listen( 8888, () => { console.log("Server are serve their service on port number http://localhost:8888....");});

// for path design
console.log(path.join(__dirname, "../CSS"));

