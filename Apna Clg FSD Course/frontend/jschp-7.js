// const student = {
//     name: "sharadha",
//     age: 21,
//     math: 93,
//     eng: 95,
//     phy: 94,
//     getAvg(){
//         let avg = (this.eng  + this.math + this.phy) / 3;
//         console.log(avg);
//     }
// }

// const sum = (a, b) => {console.log(a + b);};
// const pow = a => a*a*a;

// console.log("Hi there!");
// setTimeout( () => {console.log("Apna College");}, 4000);
// console.log("Welcome to");

// console.log("Hi there!");

// let id = setInterval( () => {console.log("hey bro");}, 2000);
// console.log(id);

// let n = prompt("Enter number");
// for(let i = 0; i < n; i++){
//     setInterval( () => {console.log(i);}, 60000);
// }

// const student = {
//     name: "DNR",
//     age: 21,
//     prop: this,
//     getName: function(){
//         console.group(this);
//         return this.name;
//     },
//     getMarks: () => {
//         console.log(this);//parent scope
//         return this.marks;
//     },
//     getInfo1: function() {
//         setTimeout( () => {
//             console.log(this)//student
//         }, 2000);
//     },
//     getInfo2: function() {
//         setTimeout( function () {
//             console.log(this)//window
//         }, 2000);
//     }
// };

// const sqr = a => a*a;
// let id =setInterval( () => {
//     console.log("Hello World!"); 
// }, 2000);

// setTimeout(() => {
//     clearInterval(id);
//     console.log("Clear Interval")
// }, 10000)

// let arr = [1,2,3,4,5]
// const arrayAvg = (arr) => {
//     let sum = 0;
//     for(let i = 0; i < arr.length; i++){
//         sum += arr[i];
//     }
//     return sum;
// }

// const isEven = (num) => {
//     if(num % 2 == 0)
//         console.log("The number is even");
//     else
//         console.log("The number is odd");
// }

// const object = {
//     msg: "Hello World!",
//     logMsg(){
//         console.log(this.msg);
//     }
// };
// setTimeout(object.logMsg, 1000);

// let length = 4;
// function callBack() {
//     console.log(this.length);
// }

// const object1 = {
//     length: 5,
//     PaymentMethodChangeEvent(callBack){
//         callBack();
//     },
// };

// object1.PaymentMethodChangeEvent(callBack, 1, 2)