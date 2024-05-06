const express=require('express')
const router=express.Router();
const book=require('../models/bookschema');


router.post('/post',async (req,res)=>{ 

    
  try{
    const product= await book.create(req.body);
    console.log(product);
    res.status(200).json(product);
  }catch(err){
    console.error(err);
    res.status(500).json({message:err.message})

  }
});

module.exports=router