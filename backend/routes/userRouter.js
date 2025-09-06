const express = require('express');
const {registerUser , loginUser} = require('../controllers/authController');
const router = express.Router();

router.get("/",function(req,res){
    res.send("working");
});

router.get('/login',loginUser);
router.get('/signup',registerUser);

module.exports = router;