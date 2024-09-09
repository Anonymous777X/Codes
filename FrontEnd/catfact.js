let datajson ='{"fact": "Cats eat grass to aid their digestion and to help them get rid of any fur in their stomachs.","length": 92}';
let url ='https://icanhazdadjoke.com/';
let btn = document.querySelector('#btn');
let para = document.querySelector('#p');

btn.addEventListener("click",async()=>{
  let fact= await getfacts();
  console.log(fact);
  para.innerText = fact; 
})

  // let newdata = JSON.parse(data);
  // console.log(newdata.fact);
async function getfacts(){
  try{
    const config = {headers: { Accept:"application/json"} };
    let res = await axios.get(url, config);
    return res.data.joke;
  } catch (e){
  console.log("Failed to Fetch..",e);
  return "error",e;
}
};