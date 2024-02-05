const express = require("express")
const router=express.Router()
const person=require("./../models/person")
const Person = require("./../models/person")

router.post('/',async(req,res)=>{

    try{

    const data=req.body

    const newPerson = new person(data);

    const response = await newPerson.save();
    console.log('data saved')
    res.status(200).json(response)
    }

    catch(err){
        console.log(err)
        res.status(500).json({error:"Internal Server  Error"})
    }
})  

router.get('/',async(req,res)=>{
    try{
        const data =  await person.find();
        console.log('data fetched')
        res.status(200).json(data)

    }
    catch(err){
        console.log(err)
        res.status(500).json({error:"Internal Server Error"})
    }
})

//Query Params

router.get('/:workType',async(req,res)=>{
    try{
        const workType=req.params.workType;
        if(workType=="chef" || workType=="manager" || workType=="waiter"){
            const response= await person.find({work:workType})
            console.log("response fetched")
            res.status(200).json(response)
        }
        else{
            res.status(404).json({error:"Not Found"})
        }
    }
    catch(err){
        console.log(err)
        res.status(500).json({error:"Internal Error"})
    }
})


//Update the Data

router.put('/:id',async(req,res)=>{
    try{
        const personId=req.params.id;  //Extract id from the URL
        const updatePersonData=req.body; //Updated data of  the person

        const response=await person.findByIdAndUpdate(personId, updatePersonData ,{
            new:true,
            runValidation:true,

        })

        if(!response){
            return res.status(404).json({error:"Person Not  Found"})
        }
        console.log("data updated")
        res.status(200).json(response);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:"Internal Server Error"})
    }
})

//Delete The Data
router.delete('/:id',async(req,res)=>{
    try{
        const personId=req.params.id;

        const response=await person.deleteOne(personId)
        if(!response){
            return res.status(404).json({error:"Person Not Found"})

        }
        console.log("data deleted")
        res.status(200).json({message:"Person Data Deleted SuccessFully"})
    }

    catch(err){
        console.log(err)
        res.status(500).json({error:"Internal Sever Error"})
    }
})

module.exports = router
