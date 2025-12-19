// const URL="https://dog-api.kinduff.com/api/facts";
// let promise=fetch(URL);
// console.log(promise);
const URL="https://dog-api.kinduff.com/api/facts";
const getFacts=async()=>{
console.log("getting data...");
let response =await fetch(URL);
console.log(response);//jason format
let data=await response.json();
// console.log(data);
console.log(data[0].text);
}