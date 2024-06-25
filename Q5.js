// function displayMessage(){
//     console.log("Hello world");
// }
// displayMessage();
// function myarray (){
//     return 2+2
// }
// let add= myarray ()
// console .log(add)
// function anotherFun(){
// // }
// const randomFunc=()=>{
//     console.log("hello world")
// // }
// // const myArray=(digital:any)=>{
// //     digital()
// // }
// // myArray(randomFunc)
//promise
// let SirziaPromise=new Promise((res,rej)=>{
//     res("hassan is pass")
// })
// SirziaPromise.then((response)=>{
//     console.log(response)
// })
// async function sirziakhan(){
//    try{ let status=await SirziaPromise
//     console.log(status)
// }
// catch(error){
// }
// }
// // let mayArray=()=>{
// //     return 2+5
// // }
// //  let add=(sum:any)=>{
// //  sum()
// //  }
// //    add(mayArray)
// // function digitalTechInfo(){
// //     console.log("this is my youtube channal for graphics designing")
// // }
// // function freelancing(graphics :any){
// //     graphics()
// // }
// // freelancing(digitalTechInfo)
// // function hello(callback:any,newName:string){
// //     callback(newName)
// // }
// // let arrfunc=(name:string)=>{
// //  console .log(`hello ${name}`)
// // }
// // hello(arrfunc,"hassan")
// // function array(callback:any,newName:string){
// // callback(newName)
// // }
// // function mayArray=(name:any)=>{
// //     console.log(`hi,${name}`)
// // }
// // array(mayArray,"sarmad")
//asynchoronous 
//set time out
// console.log(1)
// console.log(2)
// setTimeout(function(){
//     console.log(3);
// } , 2000)
// console.log(4);
// for(let i=0;i<=10;i++){
//     console.log(i);
// }
// //set interval
// console.log("hello");
// let count:number=0
// let fun= setInterval(function(){
//     count++;
//     console.log(`${count}. three`)
//     if (count>=5){
//         clearInterval(fun)
//     }
// },1000);
// function hello(callback:any,newName:string){
//     callback(newName)
// }
// function mayarray=(name:any)=>{
//     console.log(`hi ${name}`)
// }
//  hello (mayarray,"hassan")
// let imranarray:any="imran hassan";
// let hassannumber:any=244244;
// console.log(imranarray)
// console.log(hassannumber)
// const mynumber=12233
// let sadnumber:unknown="hello world"
// console.log(sadnumber)
//type assignment
//implicit atumatic guess intellgent
//explicit manual
//let firstName="imran"
//firstName=29
// let firstName:any="imran";
//  firstName=20
//  firstName=true
//  console.log(firstName)
//unknown
//  let a:unknown="imran";
//  a=20;
//  let b=a as number;
//  b="imran"
//  console.log(b)
//let a:never
// let a:string;
// let a:null=null;
// console.log(a)
//unknown
// let addnumber:unknown="hello imran hassan";
// let add=addnumber as string
// console.log(typeof add)
//never
function addnumber2() {
    throw new Error("user not found");
}
addnumber2();
export {};
