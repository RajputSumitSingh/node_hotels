// const { stringStream } = require('cheerio');
// const { uniq } = require('lodash');
const { uniqueId } = require('lodash');
const mongoose = require('mongoose');

// define the person mongoose.Schema
const personSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number
    },
    work : {
        type: String,
        enum : ['chef','waiter','manager'],
        required: true
    },
    email :{
        type: String,
        required: true,
        unique: true
    },
    adress : {
        type : String,
        required: true
    }
    

});

//now we creating the model from the schema
const Person = mongoose.model('Person', personSchema);
module.exports = Person;
//export the model