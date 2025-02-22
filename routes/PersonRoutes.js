const express = require('express');
const router = express.Router();
const Person = require('./../models/Persons');

//this is the post request of the person
router.post('/',async(req,res)=>{

    try{
        const data = req.body;
        //saaaave the new person to the database
        const newPerson = new Person(data);

        // console.log(req.body);
        // res.send("data recieved");

        //save the new person to the database
        const response = await newPerson.save();
        console.log('data saved');
        res.status(200).json(response);

    }catch(err){

        console.log(err);
        res.status(500).json({error: 'internal server error'});

    }

    });


        //this is the get request of the person
        router.get('/',async(req,res)=>{
            try{
                const data = await Person.find();
                console.log("data is fetched");
                res.status(200).json(data);
            }catch(err){
                console.log(err);
                rest.status(500).json({error: "internal server error"});
            }
        });

        
        router.get('/:work',async(req,res)=>{
            try{
                const workType = req.params.work;//extract the work type from the url
                if(workType == 'chef' || workType == 'waiter' || workType == 'manager'){
    
                    const data = await Person.find({work: workType});
                    console.log("data is fetched worktype");
                    res.status(200).json(data);
                }else{
                    res.status(400).json({error: "invalid work type"});
    
    
                }
            }catch(err){
                console.log(err);
                res.status(500).json({error: "internal server error"}); 
            }
        });


        //this route is for updating the person
        router.put('/:id',async(req,res)=>{
            try{
                const id = req.params.id;
                const data = req.body;
                const response = await Person.findByIdAndUpdate(id,data,{
                    new: true, //return the updated document
                    runValidators: true // run mongodb validation which we have given in the schema
                });
                if(!response){
                   return res.status(404).json({error: "person not found"});
                }
                console.log('data updated');
                res.status(200).json(response);
                
            }catch(err){
                console.log(err);
                res.status(500).json({error: "internal server error"});
            }
        });

        router.delete('/:id',async(req,res)=>{
            try{
                const id = req.params.id;
                const response = await Person.findByIdAndDelete(id);
                if(!response){
                    return res.status(404).json({error: "person not found"});
                }
                console.log('data deleted');
                res.status(200).json({data : "data is deleted",response});
            }catch(err){
                console.log(err);
                res.status(500).json({error: "internal server error"});
            }
        });

module.exports = router;