const express = require('express');
const router = express.Router();

const MenuItem = require('./../models/MenuItem');



//this is the post request of the menu
router.post('/',async(req,res)=>{
    try{
        const data = req.body;
        const newMenuItem = new MenuItem(data);
        const response = await newMenuItem.save();
        console.log('data saved');
        res.status(200).json(response);
    }catch(err){
        console.log(err);
        res.status(500).json({error: 'internal server error'});
    }
})

//this is the get request of the menu
router.get('/',async(req,res)=>{
    try{
        const data = await MenuItem.find();
        console.log("data is fetched");
        res.status(200).json(data);

    }catch(err){
        console.log(err);
        res.status(500).json({error: "internal server error"});
    }
})

router.get('/:taste',async(req,res)=>{
    try{
        const tasteType  = req.params.taste;
        if(tasteType == 'spicy' || tasteType == 'sweet' || tasteType == 'sour' || tasteType == 'bitter' || tasteType == 'salty'){
            const data = await MenuItem.find({taste: tasteType});
            console.log("data is fetched taste");
            res.status(200).json(data);
        }else{
            res.status(400).json({error: "invalid taste"});
        }
    }catch(err){
        console.log(err);
        res.status(500).json({eroor : "internal server error"});
    }
})

module.exports = router;
//this is the get request of the menu
