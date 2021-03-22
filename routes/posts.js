const express = require('express');
const { model } = require('mongoose');
const router = express.Router();

const newPost = require("../models/post") 
router.post("/",(req,res) => {
    
    
})

router.post('/post',(req,res)=>{
    let nayiPost = new newPost();
    nayiPost.name = req.body.name;
    nayiPost.id = req.body.id;
    nayiPost.comments = req.comments;
    nayiPost.save( (err,body)=>{
        if(err){
            
            res.json({
                msg:"Cannot save",
                error:err

            })
        }
        else{
            res.json({
                status:200,
                body:nayiPost
                
            })
        }
    })
})
router.get('/getPost/',(req,res)=>{
    const name = req.body.name;
    newPost.findOne({name},(err,post)=>{
        if(err){
            res.status(404).json({
                msg:"Cannot find the post"
            })
        }
        else{
            
            res.json({ post: post.comments});
        }
    })
    
    
})



module.exports = router

