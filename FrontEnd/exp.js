let init = require("express");
let app = init();
let port = 8080;

app.listen(port,()=>{
    console.log("listening...");
});
app.use((req,res)=>{
    console.log("recieved!");
})