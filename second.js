// console.dir(window.document);
// console.dir(document.body.childNodes[1]);
// console.dir(document.body.style.background="white");
// document.body.childNodes[4].innerText="ab";
// let heading= document.getElementById("heading");
// console.dir(heading);
//  let headings= document.getElementsByClassName("heading");
// console.dir(headings);
// console.log(headings);
// let para=document.getElementsByTagName("p1");
// console.dir(para);
//Query Selector ("id ,class,tag")
// let para=document.querySelector("p1");//returns first elements only
// console.dir(para);
// let para=document.querySelectorAll("p1");//returns first elements only
// console.dir(para);
//Properties of Dom manipulation...
//1 tag Name: return tag for element nodes
// let firstEl=document.querySelector("#heading");
// console.dir(firstEl);
// console.log("firstEl.tagName",firstEl.tagName);
//2 Inner Text
// let firstEl=document.querySelector("div").children;
// console.dir(firstEl);
// let div=document.querySelector("div");//inner Html 333333333 no
// console.dir(div);
// console.log(div.innerText);
// console.log(div.innerHTML);
//text content:hidden value ni dekhau xa
//let heading=document.querySelector("h1");//text content
//Qn h2 head ma element rakhne html bata ani js bata tesma collage add garne.
// let heading=document.querySelector("h2");
// heading.innerText=heading.innerText+"collage";
// console.log(heading.innerText);
// 3 ta div banau ne class box rakhne sab lai acess garne ani text add garne  each ma. 
// let divs=document.querySelectorAll(".box");
// let idx=1;
// for (div of divs){
// div.innerText=div.innerText+`new 1${idx}`;
// }
// get attribute
// let div=document.querySelector("div");
// console.log(div);
// let id=div.getAttribute("id");
// console.log(id);
//set attribute
// let para=document.querySelector("p");
// console.log(para.setAttribute("class","newClass"));
// let div=document.querySelector("div");
// console.log(div);
// console.log(div.style);
// div.style.backgroundColor="green";
// div.style.backgroundColor="white";
// div.style.fontSize="26 px";
// div.innerText="bikramdon!";
// div.style.visibility="hidden";//hide div
//insert element
//1 node append(el)add of the end node (inside)
// let newBtn=document.createElement("button");
// newBtn.innerText="click";
// console.log(newBtn);
// let div=document.querySelector("div");//acess div
// div.append(newBtn);
// div.prepend(newBtn);
// div.before(newBtn);
// div.after(newBtn);
//  let newHeading=document.createElement("h1");
//  newHeading.innerHTML="<i>H1!</i>";
//  document.querySelector("body").prepend(newHeading);
// let para=document.querySelector("p");
// //delete element
// para.remove();
//Qn.
// let newBtn=document.createElement("button");
//  newBtn.innerText="click me!";
//  newBtn.style.backgroundColor="red";
//  newBtn.style.color="white";
// document.querySelector("body").prepend(newBtn);
// let para=document.querySelector("p");
// console.log(para);
// console.log(para.getAttribute("class"))
// console.log(para.classList.add("newClass"));






