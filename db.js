const mongoose = require('mongoose');

const mongoUrl = 'mongodb://localhost:27017/hotels';

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