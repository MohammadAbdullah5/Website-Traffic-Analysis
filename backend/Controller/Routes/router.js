const express = require("express");
const { GetAllData , GetAllWebsites , GetGenderData , GetReferrerData , GetPagesData} = require("../Func");

const router = express.Router();



router.get('/api/getData' , (req , res) =>{
    const {webURL} = req.query;
    
    return  GetAllData(webURL, res);
})

router.get('/api/getWebsiteData' , (req , res) =>{
    
    return  GetAllWebsites(req, res);
})

router.get('/api/getRefferrerData' , (req , res) =>{
    
    return  GetReferrerData(req, res);
})


router.get('/api/getPagesData' , (req , res) =>{
    
    return  GetPagesData(req, res);
})



router.get('/api/getPageSectionData' , (req , res) =>{
    
    return  GetPagesData(req, res);
})




router.get('/api/getGenderData' , (req , res) =>{

    
    return  GetGenderData(req, res);
})



module.exports = router;