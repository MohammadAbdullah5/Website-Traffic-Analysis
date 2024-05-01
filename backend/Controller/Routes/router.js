const express = require("express");
const { GetRank , GetWebsitesVisits , GetPagesPerVisit , GetIndustryRank , GetBounceRate , GetAverageDuration , GetName  , GetDescription} = require("../Func");

const router = express.Router();



router.get('/api/getRank' , (req , res) =>{
    const {webURL} = req.query;
    
    return  GetRank(webURL, res);
})

router.get('/api/getWebsiteVisits' , (req,res)=>{

    const {webURL} = req.query;
    return GetWebsitesVisits(webURL,res);
})


router.get('/api/getPagePerVisits', (req,res) =>{
    const {webURL} = req.query;
    return GetPagesPerVisit(webURL,res);
})


router.get('/api/getIndustryRank' , (req,res)=>{
    const {webURL} = req.query;
    return GetIndustryRank(webURL,res);
})


router.get('/api/getBounceRate' , (req,res)=>{
    const {webURL} = req.query;
    return GetBounceRate(webURL,res);
})


router.get('/api/getAverageDuration' , (req,res)=>{
    const {webURL} = req.query;
    return GetAverageDuration(webURL,res);
})


router.get('/api/getName' , (req,res)=>{
    const {webURL} = req.query;
    return GetName(webURL,res);
})

router.get('/api/getDescription' , (req,res)=>{
    const {webURL} = req.query;
    return GetDescription(webURL,res);
})



module.exports = router;