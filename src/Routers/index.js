const express = require('express');

const router = express.Router();

router.get('/home' , (req,res) => {
     console.log(req.url);
     res.status(200).render("index");
     // res.write("<h1> Hello client, I am express server and I server a resource to you want </h1>");
});

router.get("/activity", (req,res) => {
     console.log(`index into activity page are loaded....`);
     res.status(201).render("activity" , { 
          display : "none"
     });
});

module.exports = router;