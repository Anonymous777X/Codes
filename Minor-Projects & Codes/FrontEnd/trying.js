

// let obj = {
//     name :"amit",
//     rollno:24,
//     the : this, //
//     hello : function(){
//         console.log("Hello World",this.name); //depends on how they are called.
//        return console.log(this)
//     },
//     outer :function(){
//         console.log("outer :",this);
//         let inner =()=>{
//             console.log("inner:",this);
//         }
//         inner()
//     }
// }
// function hello(){
//     console.log("func hello this : ",this);
// }
// obj.outer();
// let hell = obj.hello.bind(obj);
// hell();
// // console.log(obj.the);
// console.log(obj.name);

// class person{
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
// }
// let p1 = new person("sahil",21);
// console.log(p1);


// let url ='https://catfact.ninja/fact';
// let p= document.createElement("p");
// let h1 = document.querySelector("#h1");
// let body = document.querySelector("body");
// async function getfact(){
//     try{
//         let raw =await axios.get(url);
//     let data = raw.data.fact;
//     p.innerText=data
//     h1.after(p);
//     p.prepend("FACT : ")
//     }catch(e){
//         console.log(e);
//     }
// };
// getfact();

// let url ='https://catfact.ninja/fact';
// async function getfact(){
//     let raw = await fetch(url);
//     let pdata = await  raw.json();
//     let  fact =  pdata.fact 
//     console.log(fact);
// }
// getfact();

// let url ='https://catfact.ninja/fact';
// fetch(url)
// .then((res)=>{
//     console.log(res.body);
//     return res.json().then((data)=>{
//         let ob ={
//         data,
//         orr: res.body
//         }
//         return ob;
//     });
// })
// .then((data)=>{
//     console.log(data.data.fact);
//     console.log(data.orr);

// });

// let h1 = document.querySelector("#h1");
// function newcolor(color,delay){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             h1.style.color=color;
//             resolve("is changed..");
//         },delay)
//     })
// }
// newcolor("red",1000).then((res)=>{
//     console.log("color 1",res);
//     return newcolor("blue",1000);
// })
// .then((res)=>{
//     console.log("color 2",res)
//     return newcolor("yellow",1000);
// })
// .then((res)=>{
//     console.log("color 3", res);

// })
// .catch((err)=>{
//     console.log(err)
// })



// function savedata(data){
//     return new Promise((resolve,reject)=>{
//         let speed = Math.floor(Math.random()*10);
//         if(speed>4){
//             resolve("data Was Saved!");
//         }
//         else{
//             reject("Slow Internet Speed..");
//         }
//     })
//     };

// savedata("hello").then(()=>{
//     console.log(" Try 1 : data was saved to DataBase");
//     return savedata("world");
// })
// .then(()=>{
//     console.log("Try 2 : data was saved to database");
// })
// .catch(()=>{
//     console.log("Failed to fetch DataBase");
// })

