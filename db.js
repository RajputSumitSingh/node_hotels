const mongoose = require('mongoose');
require('dotenv').config();

// const mongoUrl = process.env.MONGODB_URL_LOCAL;

const mongoUrl = process.env.MONGODB_URL;

 mongoose.connect(mongoUrl,{
    useNewUrlParser: true,
    useUnifiedTopology: true,

})

const db = mongoose.connection;

db.on('connected',()=>{
    console.log("mongoDB connected");
})
db.on('error',(err)=>{
    console.log("singh : mongoDB connection failed because of ",err);
})
db.on('disconnected',()=>{
    console.log("mongoDB disconnected");
})

// module.exports = db;
module.exports = db;
// module.exports = mongoose; 