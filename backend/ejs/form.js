import express from 'express';
import path from "path";
import { fileURLToPath } from "url";

let app = express();
let port = 8080;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

app.listen(port,()=>{
    console.log(`Listening on Port ${port}`);
});
