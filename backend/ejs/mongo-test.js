import mongoose from "mongoose";
import express from "express";

let app = express();
async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
}
main()
.then((res)=>{
    console.log("Connection Successfull", res);
})
.catch((err)=>{
    console.log(err);
});

const schema = mongoose.Schema({
    name : String,
    rollno: Number,
    age:Number
})

let student = mongoose.model("student",schema);

// let stu1  = new student({
//     name: "Sahil",
//     rollno: 1,
//     age:20
// })
// stu1.save()

// student.insertMany([{
//         name: "Karan",
//         rollno: 2,
//         age:20
//     },{
//         name: "Rohan",
//         rollno: 3,
//         age:19
//     },
// {
//     name: "Amit",
//         rollno: 4,
//         age:21
// }])

student.findByIdAndUpdate("66fc2a5bb8ab0d6290f952e1",{name:"Reaven"},{ new: true})
.then((res)=>{
    console.log("saved to DB",res);
})
.catch((err)=>{
    console.log("save uncessfull");
})