// function hello(){
//     console.log("hello");//asynchronous 

// }
// setTimeout(hello,2000)//timeout;
//nested 
// let age=10;
// if(age>=18){
//     if (age>=60){
//         console.log("senior");
//     } else {
//         console.log("middle");
//     }
// }
//     else{
//         console.log("child");
//     }
// call back 2 2 sec ma ekpaxi arko
//  function getData(dataId,getNextData){
//     setTimeout(()=>{
//         console.log("data",dataId);
//         if (getNextData){
// getNextData();
//         }
//     },2000);
//  }
//  getData(1,()=>{ // call back pass gareko vitra ko  vitra
//     getData(2,()=>{
//         console.log("getting data 3......");//data 2 aaye xi yo aauxa ani balla 2 second ma 3 aauxa
//         getData(3);
//     });
//  });
//promise
// function getData(dataId,getNextData){
//     return new Promise((resolve,reject)=>{

//     setTimeout(()=>{
//         //console.log("data",dataId);
//         //resolve("success");
//         reject("error");
//         if (getNextData){
// getNextData();
//         }
//     },7000);
//  });
// }
//.then().catch()
// const getPromise =()=>{
//     return new Promise((resolve,reject)=>{
//         console.log("I am a promise");
//        // resolve("success");
//        reject ("error");
//     })
// };
// let promise=getPromise();
// promise.then((res)=>{
//     console.log("promise fulfilled",res);
// });
// promise.catch((err)=>{
//     console.log("rejected",err);
// })
//  function asyncFunc(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data!");
//             resolve("sucess");
//         },4000);
//     });
//  }
//  console.log("fetching data1....");
//  let p1=asyncFunc();
//  p1.then((res)=>{
//     console.log(res);
//  });
//  function asyncFunc1(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data!");
//             resolve("sucess");
//         },4000);
//     });
//  }function asyncFunc2(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data2");
//             resolve("sucess");
//         },4000);
//     });
//  }
//  console.log("fetching data1....");
//  let p1=asyncFunc1 ();//asyncFunction.then((res)>=)--this can also be used no p1 and 2
//  p1.then((res)=>{
//     console.log(res);
//     console.log("fetching data 2");
//     let p2=asyncFunc2();
//     p2.then((res)=>{
//         console.log(res);
//     }) 
//  });
//  function getData(dataId){
//     return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("data",dataId);
//         resolve ("sucess");
//     },2000);
// });
//  }
//  //promise chain
//  getData(1)
//  .then((res)=>{
//     return getData(2);// actuall promise chain 
//  })
//  .then((res)=>{
//     return getData(3);//easire then call back hell
//  }) 

//  .then((res) => {
//     console.log(res);
//  }); 
    // console.log(res);
    // getData(2).then((res)=>{
    // console.log(res);
//  }); 
//  }); 
// function api(){
//     return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("wether data");
//         resolve ("200");
//     },2000);
// });
// }
// async function getWeatherData(){
//     await api();
//     await api();//yo second time data palai pilo aauna async garda sajilo
// }
// function getData(dataId){
//     return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("data",dataId);
//         resolve ("success");
//     },2000);
// });
// }
// async function getAllData(){
//     console.log("getting data1............");
//     await getData(1);
//         console.log("getting data2............");
//     await getData(2);//yo second time data palai pilo aauna async garda sajilo
//     console.log("getting data1............");
//     await getData(3);
// }
//max use async await
//promice and callback dont need function but async await need for that
//solution
//IIFE 
// function getData(dataId){
//     return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("data",dataId);
//         resolve ("success");
//     },2000);
// });
// }
// async function getAllData(){
//     console.log("getting data1............");
//     await getData(1);
//         console.log("getting data2............");
//     await getData(2);//yo second time data palai pilo aauna async garda sajilo
//     console.log("getting data1............");
//     await getData(3);
// }
// (async function (){
//     console.log("getting data1............");
//     await getData(1);
//         console.log("getting data2............");
//     await getData(2); 
//     console.log("getting data1............");
//     await getData(3);
// })();//iee form it can use for only one call
