//ติดต่อกับฐานข้อมูล / ดำเนินการกับฐานข้อมูล
const Blogs = require("../models/blogs")
const slugify = require("slugify")
const { v4: uuidv4 } = require('uuid');
//บันทึกข้อมูล
exports.create = (req, res) => {
    //สร้างตัวแปรที่ได้จาก  req.body
    const { B_Name, B_Address, B_Electricity, B_Water, B_Detail, B_Type } = req.body
    let slug = slugify(B_Name)
    //ตรวจสอบความถูกต้องของข้อมูล !slug เป็นค่าว่างไหม
    if (!slug) slug = uuidv4();
    switch (true) {
        case !B_Name:
            return res.status(400).json({ error: "กรุณาป้อนชื่อสาขา" })
            break;
        case !B_Address:
            return res.status(400).json({ error: "กรุณาป้อนที่อยู่" })
            break;
        case !B_Electricity:
            return res.status(400).json({ error: "กรุณาป้อนอัตราค่าไฟฟ้า" })
            break;
        case !B_Water:
            return res.status(400).json({ error: "กรุณาป้อนอัตราค่าน้ำ" })
            break;
        case !B_Detail:
            return res.status(400).json({ error: "กรุณาป้อนรายละเอียด" })
            break;
        case !B_Type:
            return res.status(400).json({ error: "กรุณาป้อนประเภทห้อง" })
            break;
    }
    //บันทึกข้อมูล
    Blogs.create({ B_Name, B_Address, B_Electricity, B_Water, B_Detail, B_Type, slug }, (err, blog) => {
        if (err) {
            res.status(400).json({ error: "มีชื่อสาขาซ้ำกัน" })
        }
        res.json(blog)
    })
}
//ดึงข้อมูลทั้งหมด
exports.getAllblogs = (req, res) => {
    Blogs.find({}).exec((err, blogs) => {
        res.json(blogs)
    })
}

//ดึงข้อมูลที่เลือก
exports.singleBlog = (req, res) => {
    const { slug } = req.params
    //findOne ค้นแค่ Document เดียว
    Blogs.findOne({ slug }).exec((err, blog) => {
        res.json(blog)
    })
}

//ลบข้อมูล
exports.remove = (req, res) => {
    const { slug } = req.params
    Blogs.findOneAndDelete({ slug }).exec((err, blog) => {
        if (err) console.log(err)
        res.json({
            massage: "ลบบทความเรียบร้อย"
        })
    })
}