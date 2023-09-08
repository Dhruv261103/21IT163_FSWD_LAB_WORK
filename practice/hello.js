// function expression
// let fun=function(){
//     console.log("Hello How Are Yoy..");
// }

// function fun1() {
//     console.log("Hello How Are Yoy..");
// }


//Arraow Function
// let age=(cur,birth)=>console.log(`Your Age is ${cur-birth}`);


//Higher Order Function

// let upperCase=function(str)
// {
//     return str.toUpperCase();
// }

// let lowerCase=function(str)
// {
//     return str.toLowerCase();
// }

// let transformar=function(str,fun)
// {
//     return fun(str);
// }

// console.log(transformar("hello dhruv..",lowerCase));

// let fun1=function(msg1)
// {
//     return function(msg2)
//     {
//         console.log(`${msg1},${msg2}`);
//     }
// }

// let ans=fun1("Hello");
// ans("Dhruv");
// function fun1(name)
// {
//     console.log(`I am running after 5 sec.  ${name}`);
// }

// setTimeout(fun1,5000,"Dhruv");
// setInterval(fun1,3000,"ABC");

// Hoisting - we use variable and function before declaration

// let obj={
//     name:"Dhruv",
//     id:"21IT163",
//     fun:function() {
//         console.log(`My Name Is ${this.name} and My Id Is ${this.id}`);
//     }
// }

// 1.
// obj.fun(); 

// 2.
// let object=obj.fun;
// object.call(obj);

// 3.
// let object=obj.fun;
// object.apply(obj)


// let obj={
//     name:"Dhruv",
//     id:"21IT163",
// }

// function fun() {
//     console.log(`My Name Is ${this.name} and My Id Is ${this.id}`);
// }

// 4.
// let object=fun.bind(obj)
// object()