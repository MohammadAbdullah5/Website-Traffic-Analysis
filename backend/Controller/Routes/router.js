import  express  from "express";
import { GetTop3Ranks } from "../Func";

const router = express.Router();


router.get('/api/getRanks' , (req , res) =>{
    return GetTop3Ranks(req,res);
})


export default router;