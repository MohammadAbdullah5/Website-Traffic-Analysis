const express = require("express");
const { GetTop3Ranks } = require("../Func");

const router = express.Router();


router.get('/api/getRanks' , (req , res) =>{
    return GetTop3Ranks(req,res);
})


module.exports = router;