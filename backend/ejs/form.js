import express from 'express';

let app = express();
let port = 8080;
app.use(express.urlencoded({extended : true}));
app.use(express.json());
app.listen(port,()=>{
    console.log(`Listening on Port ${port}`);
});
app.get("/register",(req,res)=>{
    let {username, password}=req.query;
    console.log(req.query);
    res.send(`Hello & Welcome Back @${username}`);
})
app.post("/register",(req,res)=>{
    let {username, password}=req.body;
    console.log(req.body);
    res.send(`Hello & Welcome Back @${username}`);
})
