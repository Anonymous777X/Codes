import { faker } from '@faker-js/faker';
import mysql from 'mysql2';
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import methodOverride from "method-override";

const app= express();
const __filename =fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));
app.use(methodOverride('_method'));
app.use(express.urlencoded({extended:true}));


function createRandomUser() {
    return {
      userId: faker.string.uuid(),
      username: faker.internet.userName(),
      email: faker.internet.email(),
      avatar: faker.image.avatar(),
      password: faker.internet.password()
    };
  };
  
let userss = faker.helpers.multiple(createRandomUser, {
    count: 48,
  });

console.log(userss);

const connection =  mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'mydb',
    password:"root"
  });

let port= 3030
app.listen(port,()=>{
    console.log("listening on Port:",port);
})

app.get("/",(req,res)=>{

let query= "select count(*) from cards;";
  
try{
    connection.query(query,(err,result)=>{
        if(err) throw err;
        let total = result[0]['count(*)'];
        res.render("faker-home",{total});
    })
}catch(err){
    console.log(err);
    res.send("Database Error...");
};    
});
app.get("/show",(req,res)=>{
    let query= "select * from cards;";
  
try{
    connection.query(query,(err,result)=>{
        if(err) throw err;
        let data = result;
        res.render("faker-show",{data});
    })
}catch(err){
    console.log(err);
    res.send("Database Error...");
};

});

app.get("/:id/edit",(req,res)=>{
    let id = req.params.id;
    console.log(id);
    let query = "select * from cards Where userid =?; "
    try{
        connection.query(query,id,(err,result)=>{
            if(err) throw err;
            let data = result[0];
            res.render("faker-update",{data});
        });
    }
    catch(err){
        res.send("No User-id found...")
        console.log(err);
    }
});
app.patch("/:id/edit",(req,res)=>{   
    let {id} = req.params;
    let newname = req.body.username;
    let pass = req.body.password;
    let query = "select * from cards Where userid =?; "
    try{
        connection.query(query,id,(err,result)=>{
            console.log("this is patch obj :",result);
            if(err) throw err;
            if(pass == result[0].password){
                console.log(pass, result[0].password);
                let query1 ="update cards set username =? where userid =?;";
                connection.query(query1,[newname,id],(err,result)=>{
                    if(err) throw err;
                    console.log(result);
                    res.redirect("/show?_data=ok")
                })}
            else{
                setTimeout(() => {
                    res.redirect(`/${id}/edit?_pass=wrong`);
                }, 3000);
                };
        });
    }
    catch(err){
        res.send("No User-id found...")
        console.log(err);
   

}});


