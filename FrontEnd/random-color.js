let div = document.querySelector('#box');
let btn = document.querySelector('button');
let h2 = document.querySelector('h2');

btn.addEventListener("click",()=>{
    let val = colors();
    h2.innerText = val;
    div.style.backgroundColor = val;
    console.log("clicked");
})
function colors(){
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);

    let color = `rgb(${red},${green},${blue})`;
    return color
}