// // for(let i=1;i<=30;i++){
 // //     console.log("Bikram")
// // // // // // }
// // // // // // calculate sum of 1 to 5
// // // // // let i=20;
// // // // // do{
// // // // //     console.log ("sum");
// // // // //     i++;
// // // // // }while(i<=30);
// // // // // for-of loop
// // // // let str = "bikram";
// // // // let size=0;
// // // // for(let i of str){
// // // //     console.log("i",i);
// // // //     size++;s  
// // // // }
// // // // console.log("size",size);
// // // // for in loop 
// // // //  let student={
// // // //     name:"bikram",
// // // //     class:7,
// // // //     gpa:4,
// // // //     ispass:true
// // // //  };
// // // //  for(let i in student){
// // // //     console.log("i=",i,"value=",student[i]);
// // // //  }
// // // let gameNum=31;
// // // let userNum=prompt("guess the number:");
// // // while(userNum != gameNum){
// // //     userNum=prompt("guess the number again ,you entered  a wrong number:");
// // //     }
// // // console.log("congratulation's,you entered a correct number");
// // // string in js
// // let str ="bik";
// // console.log(str[2]);
// // template literal
// let specialString=`this is tempalte literal`;
// let obj={
//     name:"pen",
//     price:10
// };
// let output= `the cost of ${obj.name} is ${obj.price}`;
// console.log(output);
//let specialString=`this is tempalte literal ${1+2+5}`;//we can add
//console.log(specialString);
// console.log("bik \n ram");
// str.toUpperCase()
// let str=("bik");
// let newStr=str.toUpperCase();
// console.log(newStr);
//str.trim()removes whitespaces
// let str=("   bik      ");
// let newStr=str.trim();
// console.log(newStr);
//  let str=("012345");
//  let newStr=str.slice(1,4);
//  console.log(newStr);
// let str1="bik";
// let str2="ram";
//  console.log(str1.concat(str2))//joins str2 with str1.
//str.replace(searchVal,newVal)
// let str="abcdefgh";
// console.log(str.replace("ef","12"));
// let usernName=prompt("enter your name");
// str1="@";
// console.log(str1.concat(usernName));
//Arrays
// let marks=[97,56,47,89];
// console.log(marks);
// console.log(marks.length);//property
//string ko array
//for loop array
// let name=["efootball","pubg","coc"];
// for(ind=0;ind<name.length;ind++){
//     console.log(name[ind]);
// }
// for-of loop 
// let name=["efootball","pubg","coc"];
// for( let game of name ){
//     console.log(game);
// }
// let marks =[85,97,44,37,76,60];
// sum=0;
// for(let val of marks){
//     sum=sum+val;
// }
// let average= sum/marks.length;
// console.log("the average marks of the entire class is",average);
//by for of loop
// let items=[250,645,300,900,50];
// let i=0;
// for(let val of items){
//    offer=val/10;
//    items[i]=items[i]-offer;
// console.log("vale after offer",items[i]);
// i++;
// }
//By for of  loop
// let items=[250,645,300,900,50];
// for(i=0;i<items.length;i++){
//     offer=items[i]/10;
//     items[i]=items[i]-offer;//items[i]-=offer;
//     console.log(`value after offer=${items[i]}`);
// }
//push
// let hero=["batman","superman","spiderman"];
// hero.push("krish","iron man");
// console.log(hero);
// let hero=["batman","superman","spiderman"];
// console.log(hero);
//  heroDelete=hero.pop();
//  console.log(hero);
//  console.log("deleted :",heroDelete);
//to string
// let hero=["batman","superman","spiderman"];
// console.log(hero);
// console.log(hero.toString());
//concat()
// let hero=["batman","superman","spiderman"];
// let  dchero=["krish"];
// bothHeros=hero.concat(dchero);
// console.log("combined:",bothHeros);
// Unshift():add to start
// let lett=["a","b","c"];
// lett.unshift("d");
// console.log(lett);
//shift():delete first 
// let lett=["a","b","c"];
// lett.shift();
// console.log(lett);
//slice()
// let lett=["a","b","c","d"];
// console.log(lett);
// console.log(lett.slice(1,2));
//splice
// let number=["1","2","3","4","5","6","7"];
//number.splice(2,2,56,78);
//number.splice(2,0,101);//add number
// number.splice(2,1);
// console.log(number);
// let companies=["A","B","C","D","E","F"];
// companies.shift();
// console.log(companies);
// let companies=["A","B","C","D","E","F"];
// companies.splice(2,1,"G");
// console.log(companies);
// let companies=["A","B","C","D","E","F"];
// companies.push("H");
// console.log(companies);
//function 
// function collage(){
//     console.log("2");
//     console.log("3");
// } 
// collage();
// sum two numbers
// function sum(a,b){
//     console.log(a+b);
// }
// sum(1000,20);
//Arrow function
// const sum=(a,b)=>{
//     console.log(a+b);
// }
// sum(3,4);
//vowel count of string
// function vowel(str){
//     let count=0;
//     for(const char of str){
//         if (
//             char==="a" || char==="e" || char==="i" || char==="o"|| char==="u"
//         ){
//         count++;
//         }
//     }
//     console.log(count);
// }
// vowel("bikram");
// same qn by arrow function
// const vowel=(str)=>{
//     let count=0;
//     for(const char of str){
//          if (
//              char==="a" || char==="e" || char==="i" || char==="o"|| char==="u"
//          ){
//          count++;
//          }
//      }
//      console.log(count);
//  }
//  vowel("bikram");
//for each loop in array
// let arr=["b","c"];
// arr.forEach((val)=>{
//     console.log(val);
// });
//three parameter use  valu,arr,idx
// let nums=[2,7];
// nums.forEach((num)=>{
//     console.log(num*num);//num**2
// });
//map method
// let arr=["b","c"];
// arr.map((val)=>{
//     console.log(val);
// });
// return new value
// let arr=["b","c"];
// let newArr=arr.map((val)=>{
//     return val;
// });
// console.log(newArr);
//filer method
// let arr=[1,2,3,4,5,6];
// let newArr= arr.filter((val)=>{
//     return val%2===0;
// });
// console.log(newArr);
// find which one is greater
// let arr=[  4 ,5, 1];
// let newArr=arr.reduce((pre,curr)=>{
//     return pre>curr?pre:curr;
// });
// console.log(newArr);
//find greater then 90
// let arr=[12,35,95,91];
//  let newArr= arr.filter((val)=>{
//      return val>90;
//  });
//  console.log(newArr);
//ask user and provide sum  
// let n=prompt("enter a number");
//  let arr=[];
//  for(i=1;i<=n;i++){
//     arr[i-1]=i;//1(0 index),2(1),3(2),
//  }
//  console.log(arr);
//   let newArr=arr.reduce((res,curr)=>{
//    return res +curr;//res 1 and curr 2 ..........
//   });
//  console.log(newArr);
// let n=prompt("enter a number");
//  let arr=[];
//  for(i=1;i<=n;i++){
//     arr[i-1]=i;//1(0 index),2(1),3(2),
//  }
//  console.log(arr);
//   let newArr=arr.reduce((pre,curr)=>{
//    return pre*curr;//prev 1 and curr 2 ..........
// });
//  console.log(newArr);


















