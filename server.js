const express = require('express')
const app = express()
const db = require('./db');

const bodyParser = require('body-parser');
app.use(bodyParser.json());//req.body


app.get('/', function (req, res) {
  res.send("this is the Home page of the website");
})





    //improt the router files of the person
    const PersonRoutes = require('./routes/PersonRoutes');
    app.use('/Person',PersonRoutes);

    //improt the router files of the menu
    const MenuRoutes = require('./routes/MenuRoutes');
    app.use('/Menu',MenuRoutes);



app.listen(3000, ()=>{
    console.log("the server is running on port 3000");
})

