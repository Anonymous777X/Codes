let url ="http://universities.hipolabs.com/search?name=";

let btn = document.querySelector("#btn");
let list = document.querySelector("#list");

btn.addEventListener("click",async ()=>{
    let input = document.querySelector('#inp').value;
    console.log(input);
    let colarr = await getinfo(input);
    showlist(colarr);
    console.log(colarr);
});
async function showlist(colarr){
    list.innerText="";
    for(col of colarr){
        console.log(col.name);
        let li = document.createElement('li');
        li.innerText= col.name;
        list.appendChild(li);
    }

}
async function getinfo(input){
  try{
    let res =await axios.get(url+input);
    return res.data;
  } catch (e){
    console.log("Failed to Fetch",e);
    return [];
  }
}