import express from 'express';
let app = express();
let port = 3000;

app.listen(port,()=>{
    console.log(`listening in port:${port}`);
});
app.use((req,res)=>{
    console.log("Request Recieved...");
    let page="<center><h1>HEllo World</h1></center>"
    res.send(page);
})