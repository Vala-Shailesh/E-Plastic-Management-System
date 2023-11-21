const router = require('express').Router();
const cookieParser = require('cookie-parser');

router.post("/", (req,res) => {
     console.log(req.url);

     // remove cookie form client side
     res  .clearCookie("jwt");

     // client move to index page
     res.status(201).render('index');
});

module.exports = router;