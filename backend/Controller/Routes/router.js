const express = require("express");
const { GetAllData , GetAllWebsites , GetGenderData , GetReferrerData , GetPagesData , GetPageSectionData , GetEventData , GetSessionPageData , GetSessionsData , GetUserData} = require("../Func");

const router = express.Router();



router.get('/api/getData' , (req , res) =>{
    const {webURL} = req.query;
    
    return  GetAllData(webURL, res);
})

router.get('/api/getWebsiteData' , (req , res) =>{
    
    return  GetAllWebsites(req, res);
})

router.get('/api/getRefferrerData' , (req , res) =>{
    const {webURL} = req.query;
    return  GetReferrerData(webURL, res);
})


router.get('/api/getPagesData' , (req , res) =>{
    
    return  GetPagesData(req, res);
})



router.get('/api/getPageSectionData' , (req , res) =>{
    
    return  GetPageSectionData(req, res);
})


router.get('/api/getEventsData' , (req , res) =>{
    
    return  GetEventData(req, res);
})

router.get('/api/getSessionPagesData' , (req , res) =>{
    
    return  GetSessionPageData(req, res);
})


router.get('/api/getSessionsData' , (req , res) =>{
    
    return  GetSessionsData(req, res);
})

router.get('/api/getUserData' , (req , res) =>{
    
    return  GetUserData(req, res);
})



router.get('/api/getGenderData' , (req , res) =>{

    
    return  GetGenderData(req, res);
})



module.exports = router;