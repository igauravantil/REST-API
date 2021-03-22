const express = require('express')
const router = express.Router();

const newPost = require("../models/post") 
router.post("/",(req,res) => {
    
    
})

router.post('/post',(req,res)=>{
    let nayiPost = new newPost();
    nayiPost.name = req.body.name;
    nayiPost.id = req.body.id;
    nayiPost.comments = req.body.comments;
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


module.exports = router

