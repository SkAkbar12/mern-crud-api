const express=require('express')
const router=express.Router();
const book=require('../models/bookschema');

router.patch('/patch/:id',async (req,res)=>{
    try{
        const {id} =req.params;
        const data=await book.findByIdAndUpdate(id,{$set : {bookname:req.body.bookname,
        bookauthor:req.body.bookauthor}},{new:true})
        .then(result=>{
            console.log(result)
            res.status(200).json(result)
        }).catch(err=>{
            console.error(err)
        })
        
        if(!data){
            return res.status(404).json({message:'data not found'})
          }
    }catch(err){
        console.error(err)
        res.status(500).json({message:err.message})
    }
});

module.exports=router