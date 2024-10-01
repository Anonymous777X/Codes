// let obj = {
//     name :"amit",
//     rollno:24,
//     the : this,
//     hello : function(){
//         console.log("Hello World",this.name);
//        return console.log(this)
//     }
// }
// function hello(str,num){
//     this.name = str;
//     this.roll = num;
//     console.log("this : ",this);
// };
// hello.prototype.hi= function (){
//     console.log("hello world");
// };
// // let hell = obj.hello.bind(obj);
// // hell();
// // // console.log(obj.the);
// // console.log(obj.name);
// let f1 = new hello('amit',344); 
// console.log(f1.name)
// f1.hi() ;

class person{
    constructor(str,num){
        this.name = str;
        this.age = num;
    }
    data(){
        console.log(`Hi ${this.name}, Age :${this.age} \nYour Marks are ${this.marks}\n`);
    }
}
class student extends person{
    constructor(name,age,marks){
        super(name,age)
        this.marks = marks;
    }
}
let s1 = new student('Amit',23,499);
let s2 = new student('Sahil',23,-2);
let p1 = new person('Adam',36);
s1.data();
p1.data();

