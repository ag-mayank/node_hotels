const express=require("express")
const router=express.Router()
const menu=require('./../models/menu');

router.post('/',async(req,res)=>{
    try{
        const data2= req.body;
        
        const newMenu=new menu(data2)

        const response = await newMenu.save();
        console.log("data saved");
        res.status(200).json({response})
    }
    catch(err){
        console.log(err)
        res.status(500).json({error:"Internal Error"})
    }
})


router.get('/', async(req,res)=>{
        try{
            const data3=await menu.find();
            console.log("data fetched")
            res.status(200).json({data3})

        }

        catch(err){
            console.log(err)
            res.status(500).json({error:"Internal Error"})
        }
})

module.exports = router
