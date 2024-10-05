import express from "express";
import path from 'path';
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
let app = express();
let port = 3000;


app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

app.use(express.static(path.join(__dirname,"public/css")));
app.use(express.static(path.join(__dirname,"public/js")));

app.listen(port,()=>{
    console.log(`listening in port:${port}`);
});
// app.get("/",(req,res)=>{
//     let username="Alice";
//     res.render("instagram.ejs",{username});
// })
// // app.get("/query",(req,res)=>{
//     let {q} =req.query;
//     console.log(req.query);
//     let code =`<h1> You Searched for ${q || "Nothing"}</h1>`;
//     res.send(code);
// })
app.get("/:username",(req,res)=>{
    let {username}= req.params;
    let followers =["Alice","Bob Marley","Karan","Reem"]
    console.log(username);
    res.render("instagram.ejs",{username,followers});
})
app.get("*",(req,res)=>{
    res.send("Sherr kaha ja rha..")
})

// app.use((req,res)=>{
//     console.log("Request Recieved...");
//     let page="<center><h1>HEllo World</h1></center>"
//     res.send(page);
// })