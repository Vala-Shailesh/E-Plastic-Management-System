const express = require('express');
const router = express.Router();

// add middleware for authotication
const auth = require("../middlewares/auth");

router.get("/", auth ,(req,res) => {
     console.log(req.url);
     console.log(req.body.userData.role);
     res.status(200).render("home", {
          role : req.body.userData.role
     });
});

module.exports = router;