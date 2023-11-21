const express = require('express');
const router = express.Router();

// add database file
const ContentService = require('../db/contentSchema');

// add middleware for authotication
const auth = require("../middlewares/auth");

router.get("/", auth ,(req,res) => {
     console.log(req.url);
     console.log(req.body.userData.role);
     res.status(200).render("content", {
          role : req.body.userData.role
     });
});

router.post("/", auth , async (req,res) => {
     console.log(req.url);
     // console.log(req.body.userData.role);
     console.log(req.body.reqType);
     const contentData = new ContentService({
          userId : req.body.userData._id,
          role : req.body.role,
          reqUserName : req.body.reqUserName,
          reqType : req.body.reqType,
          serviceId : req.body.serviceId,
          problemTitle : req.body.problemTitle,
          problemDetail : req.body.problemDetail
     });

     console.log(contentData);

     // add data on database's
     const reqData = await contentData.save();
     console.log(reqData);
     res.status(200).render("content", {
          role : req.body.userData.role
     });
} );

module.exports = router;