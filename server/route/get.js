const express=require('express')
const router=express.Router();
const book=require('../models/bookschema');

router.get('/get',async (req,res)=>{
    try{
    const books = await book.find({});
    res.status(200).json(books);
    if(!books){
        return res.status(404).json({message:'data not found'})
      }
    }catch(err){
        console.error(err)
        res.status(500).json({message:err.message})
    }
});

router.get('/get/:id',async (req,res)=>{
    try{
    const {id}= req.params;
    const books = await book.findById(id);
    res.status(200).json(books);
    if(!books){
        return res.status(404).json({message:'data not found'})
      }
    }catch(err){
        console.error(err)
        res.status(500).json({message:err.message})
    }
});


module.exports=router