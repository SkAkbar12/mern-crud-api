const express=require('express')
const router=express.Router();
const book=require('../models/bookschema');

router.put('/put/:id',async (req,res)=>{
    try{
        const {id} =req.params;
        const data=await book.findByIdAndUpdate(id,req.body)
        res.status(200).json(data)
        if(!data){
            return res.status(404).json({message:'data not found'})
          }
    }catch(err){
        console.error(err)
        res.status(500).json({message:err.message})
    }
});

module.exports=router