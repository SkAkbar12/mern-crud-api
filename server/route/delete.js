const express=require('express')
const router=express.Router();
const book=require('../models/bookschema');


router.delete('/delete/:id',async (req,res)=>{
    try{
      const {id}=req.params;
  const data=await book.findByIdAndDelete(id);
  res.status(200).json({message:"data deleted"});
  if(!data){
    return res.status(404).json({message:'data not found'})
  }
    }catch(error){
      res.status(500).json({message:error.message})
    }
  });
module.exports=router
