const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
const mongoose = require("mongoose")
require("dotenv").config()
const blogRoute = require("./routes/blog")
const app = express()
 
//connect cloud database
mongoose.connect(process.env.DATABASE,{
    useNewUrlParser:true,
    useUnifiedTopology:false
}).then(()=>console.log("<<- Connected to Database ->>")) //then เชื่อมต่อได้ 
.catch((err)=>console.log(err)) //catch เชื่อมต่อไม่ได้ให้แสดง error

//middileware Setting Express
app.use(express.json()) 
app.use(cors())
app.use(morgan("dev")) //ดัก require

//route
/*app.get("*",(req,res)=>{
    res.json({
        data:"message from server"
    })
})*/
app.use('/api',blogRoute)


const port = process.env.PORT || 8080
app.listen(port,()=>console.log(`start server in port ${port}`))