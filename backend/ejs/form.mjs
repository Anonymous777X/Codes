import express from 'express';
import path from "path";
let app = express();
let port = 8080;
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));
app.listen(port,()=>{
    console.log(`Listening on Port ${port}`);
});
