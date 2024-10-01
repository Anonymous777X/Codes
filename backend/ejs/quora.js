import express from "express";
import path from 'path';
import { fileURLToPath } from "url";
import methodOverride from "method-override";
import { v4 as uid } from 'uuid';


const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));

let port = 3030;
app.listen(port,()=>{
    console.log("listening on Port:",port);
});

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));
app.use(express.static(path.join(__dirname,"public/css")));

let data =[

    {   id:uid(),
        username :"Shivam",
         content:"this is very good app"
    },
    {    id:uid(),
        username :"Satyam",
         content:"karan to chutiya hai.."
    },
    {    id:uid(),
        username :"karan",
         content:"thek hai bhai"
    },
    {    id:uid(),
        username :"Random-guy",
         content:"karan ke tapka lga do"
    }
]
app.get("/quora",(req,res)=>{
    res.render("quora.ejs",{data});
});
app.get("/quora/new",(req,res)=>{
    res.render("quora-form.ejs");
});
app.get("/quora/:id",(req,res)=>{
    let {id} =req.params;
    let post = data.find(p => id === p.id);
    res.render("quora-details.ejs",{post});
});
app.patch("/quora/:id",(req,res)=>{  //update
    let {id} = req.params;  
    let newcontent =req.body.content;
    let posts = data.find(post => id === post.id);
    posts.content = newcontent;
    res.redirect("/quora?posted=done");
});
app.get("/quora/:id/edit",(req,res)=>{ //details
    let {id} = req.params;
    let post = data.find(p => id === p.id);
    res.render("quora-edit.ejs",{post});
});

app.get("/quora/:id/delete",(req,res)=>{
    let {id}=req.params;
    let post =data.find(p => id === p.id)
    res.render("quora-delete",{post});
})

app.delete("/quora/:id",(req,res)=>{ //delete
    let id =req.params.id;  
    let pass = req.body.password;
    let post =data.find(p => id === p.id);
    if(pass == post.username){
        data =data.filter(p => id !== p.id)
        res.redirect("/quora?post=deleted")
    }
    else{
        res.redirect("/quora?pass=wrong");
    }
})

app.post("/quora",(req,res)=>{  //create
    let {username, content} =req.body;
    let id = uid();
    data.push({id, username,content});
    res.redirect("/quora?posted=true");
})
app.get("*",(req,res)=>{
    res.send("quora.ejs");
})
