const express = require("express")
const router = express.Router() //เรียกใช้งาน class Router
const {create,getAllblogs,singleBlog,remove} = require("../controllers/blogController")
//Client ส่งมาที่ /'xx'
router.post('/create',create) //บันทึกข้อมูล
router.get('/blogs',getAllblogs) //แสดงข้อมูลทั้งหมด
router.get('/blog/:slug',singleBlog) //ดึงบทความเดียวมาใช้โดยอ้างอิงจาก
router.delete('/blog/:slug',remove)//ลบข้อมูล
module.exports = router



//1.blog.js มาสร้าง part ให้ Client ส่งข้อมามาที่ /'xx'