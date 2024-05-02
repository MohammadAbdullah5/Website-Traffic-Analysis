const express = require("express");
const { GetAllData , GetAllWebsites , GetGenderData } = require("../Func");

const router = express.Router();



router.get('/api/getData' , (req , res) =>{
    const {webURL} = req.query;
    
    return  GetAllData(webURL, res);
})

router.get('/api/getWebsiteData' , (req , res) =>{
    const {webURL} = req.query;
    
    return  GetAllWebsites(webURL, res);
})

router.get('/api/getGenderData' , (req , res) =>{
    const {webURL} = req.query;
    
    return  GetGenderData(webURL, res);
})



module.exports = router;