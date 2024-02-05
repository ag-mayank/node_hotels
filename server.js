const express=require("express");
const app=express();
const db=require("./db");

const bodyParser = require("body-parser")
app.use(bodyParser.json())









//Import the Person Router Files
const personRoutes=require('./routes/personRoutes')
app.use('/person',personRoutes)

//Import the Menu Router Files
const menuRoutes=require('./routes/menuRoutes')
app.use('/menu',menuRoutes)




app.get('/',function(req,res){
    res.send("Hii!!! We welcome You")
})



app.listen(3000,()=>{
    console.log("Server Is Active")
})