const express = require('express');
const router = express.Router();

// add middleware for authotication
const auth = require("../middlewares/auth");

router.get("/", auth ,(req,res) => {
     console.log("site url is -> ",req.url);
     console.log(req.body.userData.role);
     console.log("it inter that...", req.body.userData.role);
     res.status(200).render("activity", {
          role : req.body.userData.role
     });
     // res.status(201).json({ name : "string"});
});

module.exports = router;