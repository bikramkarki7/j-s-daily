// const employee={
//     calcTax(){
//         console.log("tax rate is 10%");
//     },
// }
// const bikramKarki={
//     salary:50,
//    calcTax() {console.log("tax rate is 31%");},//yo nai linxa kina ki aafnai ko besi priority hunxaa
// };
// const bikramKarki2={
//     salary:50,
// };
// const bikramKarki3={
//     salary:50,
// };
// const bikramKarki4={
//     salary:50,
// };
// bikramKarki.__proto__=employee;
// bikramKarki2.__proto__=employee;
// bikramKarki3.__proto__=employee;
// bikramKarki4.__proto__=employee;
// class Toyotacar{
//     start(){
//         console.log("start");
//     }
//     stop(){
//         console.log("stop");
//     }
//     setBrand(Brand){//veriable can be set
//         //this.brandName=Brand;//this means the object jasko lagi function call gareko
//         this.brand=brand;//here both are different this.brand is for object and another for variable
//     }
// }
// let fortuner= new Toyotacar();//yo chai aba class ko template ma join vayo run garda start hunxa stop hunxa
// fortuner.setBrand("fortuner");
// class Toyotacar{
//     constructor(brand,mileage){  // creating own constructor
//         console.log("brand brand");
//         this.brand=brand;//arko variable create gari rakhna pardai na initial wa first kam constructor le gardinxa tespaxi
//         //  ko aafai garnu parxa natra undefine
//         this.mileage=mileage;
//     }
//     start(){
//         console.log("start");
//     }
//     stop(){
//         console.log("stop");
//     }
// }
// let fortuner= new Toyotacar("fortuner",10);
// console.log(fortuner);//yo chai aba class ko template ma join vayo run garda start hunxa stop hunxa
// // fortuner.setBrand("fortuner");//yo ni chaidaina constructor create gare xi
//INHERITANCE
// class Parent{
//     hello(){
//     console.log("hello");
//     }
// }
// class Child extends Parent{

// }
// let  obj=new Child();
// class Person{
// constructor(){
//     this.species="homo sapiens";}

//     eat(){console.log("eat")

//     }

// sleep(){
//     console.log("sleep");
// }
// }
// class Engineer extends Person{
//     work(){
//         console.log("solve problem");
//     }
// }
//     class Doctor extends Person{
//     works(){
//         console.log("treat patient");
//     }
// }
// let bikramObj=new Engineer();
// let bikramObj2=new Doctor();
// class Person{
// constructor(){
//     console.log("enter parent constructor");//kun paile run hune ho janna lai lekheko
//     this.species="homo sapiens";}
// sleep(){
//     console.log("sleep");
// }
// }
// class Engineer extends Person{
//     constructor(branch){
//         console.log("enter child constructor");//kun paile run hune ho janna lai lekheko
// super();//to invoke/call parent class constructor
// this.branch=branch;
// console.log("exit child constructor");//kun paile run hune ho janna lai lekheko
//     }
//     work(){
//         console.log("solve problem");
//     }
// }
// let bikramObj=new Engineer("chemical engineer");
// class Person{
// constructor(name){
//     this.name=name;
//     }
// sleep(){
//     console.log("sleep");
// }
// }
// class Engineer extends Person{
//     constructor(name){
//         super(name);//super vitra name mathi ko constructor sanga acess garau na haleko
//     }
//     work(){
//         super.sleep();//mathi ko eat lai acess garna lekhe ko
//         console.log("solve problem");
//     }
// }
// let bikramObj=new Engineer("bikram");
//Q1
// let DATA="secret information";
// class User{
//     constructor(name,email){
//         this.name=name;
//         this.email=email;
//     }
//     viewData(){
//         console.log("data=",DATA);
//     }
// }
// let student1= new User("bikram","sbikram123@gmail.com");
// let student2= new User ("hero","hero@gmail.com");
//Q2
// let DATA="secret information";
// class User{
//     constructor(name,email){
//         this.name=name;
//         this.email=email;
//     }
//     viewData(){
//         console.log("data=",DATA);
//     }
// }
//     class Admin extends User{
//         constructor(name,email){
//             super(name,email);
//         }
//         editData(){
//             DATA="some new value";
//         }

//     }
// let student1= new User("bikram","sbikram123@gmail.com");
// let student2= new User ("hero","hero@gmail.com");
// let admin=new Admin("admin","admin12@gmail.com");
// let a=1;
// let b=2;
// console.log("a=",a);
// console.log("b=",b);
// console.log("a+b",a+b);
// try{
//     console.log("a+b",a+c);//error //console ma ani c is not define vane ra console le print gardinxa
// }catch(err){
//     console.log(err);
// }

// console.log("b-a",b-a);




