//ชื่อสาขา (B_Name), ที่อยู่สาขา (B_Address), อัตราค่าไฟฟ้า (B_Electricity),
//อัตราค่าน้ำ (ฺB_Water), รายละเอียดเพิ่มเติม (B_Detail)
//slug(url) ให้ url สวย xxx-xxx
const mongoose = require("mongoose")
//โครงสร้างในการจัดเก็บข้อมูล
const blogSchema = mongoose.Schema({
    B_Name:{
        type:String,
        require:true,
        //unique:true //ชื่อห้ามซ้ำ
    },
    B_Address:{
        type:String,
        require:true
    },
    B_Electricity:{
        type:Number,
        require:true
    },
    B_Water:{
        type:Number,
        require:true
    },
    B_Detail:{
        type:String
    },
    B_Type:{
        type:String,
        require:true
    },
    slug:{
        type:String,
        lowercase:true,
        unique:true
    }
},{timestamps:true})

module.exports = mongoose.model("Blogs",blogSchema)



