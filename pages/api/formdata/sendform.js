





app.post("",(req,res)=>{
    const email=req.body.email
    const number=req.body.number
    const phone_number=req.body.phone_number
    const grade=req.body.grade
})









// export default function handler(req,res){
//     res.status(200).json(listNumbers)
// }










// export default function handler(){
//     const express=require("express")
//     const mysql=require("mysql")
//     const app=express()
    
//     const con=mysql.createConnection({
//         host:'localhost',
//         user:'sa',
//         password:'NYGiantss2026$',
//         database:'FormData'
//     })
    
//     app.get("/fetch",(req,res)=>{
//         req=con.query("Select email_address from [FormData].[dbo].[form_data]where phone is NUll or names is NUll or grade is NUll")
//         return req.json()
    
//     })
// }