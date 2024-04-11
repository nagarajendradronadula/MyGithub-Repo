// let arr = [1,2,3,4,5];
// let arr = [{
//     name: "sharadha",
//     marks: 95
// },{
//     name: "aman",
//     marks: 90.5
// },{
//     name: "rajat",
//     marks: 85
// }];

// let print = function(el){
//     console.log(el);
// }
// arr.forEach(print);

// arr.forEach(function(el) {
//     console.log(el);
// });

// arr.forEach((el) => {
//     console.log(el);
// });

// arr.forEach((student) => {
//     console.log(student.name);
//     console.log(student.age);
// })

// let double = arr.map((el) => {
//     return el * el;
// })

// let gpa = arr.map((el) => {
//     return el.marks / 10;
// })
// console.log(gpa);

// let nums = [1,2,3,4,6,9,11,8,7,10,12];
// let ans = nums.filter((el) => {
//     return el % 2 == 0;
// })

// let m = [10,2,6,4].every((el) => el%2 == 0);
// let m = [10,2,6,4].some((el) => el%2 == 0);
// let n = [10,2,6,4].some((el) => el%2 != 0);

// let nums = [1,2,3,4];
// let final = nums.reduce((acc, el) => (acc + el));
// console.log(final)

// let arr = [1,4,2,5,6,7,2,9,20];
// let max = -1;
// for(let i = 0; i < arr.length; i++){
//     if(max < arr[i]){
//         max = arr[i];
//     }
// }
// console.log(max);

// let max = arr.reduce((acc, el) => {
//     if(el > acc){
//         return el;
//     }else{
//         return acc;
//     }
// });
// console.log(max);

// let nums = [10,20,30,40,50];
// let by10 = nums.every((el) => el%10 == 0);
// console.log(by10);

// let nums = [1,3,5,4,8,7,8,0];
// let min = nums.reduce((acc, el) => {
//     if(el < acc)
//         return el;
//     else
//         return acc;
// });
// console.log(min)

// function sum(a, b = a + 2){
//     return a + b;
// }

// const student = {
//     name: "karan",
//     age: 14,
//     class: 9,
//     subjects: ["maths", "physics", "chemistry", "english"],
//     username: "karan@123",
//     password: "abcd"
// };

// let {username:  user, password} = student;

// fun = [1,2,3,4];
// const square = fun.map((num) => num * num);
// // console.log(square);
// let sum = square.reduce((acc, cur) => acc + cur);
// // console.log(sum);
// let avg = sum / fun.length;
// console.log(avg);

// let sum5 = fun.map(function(el){
//     return el + 5;

// })
// console.log(sum5);

// let str = "Hello";
// let result = function(arr){
//         let text = arr.toUpperCase(arr);
//         let array = text.split('');
//         return array;
//     }
// console.log(result(str));

// let doubleAndReturnArgs = function(arg1, ...arg2){
//     return [...arr, ...arg2.map((el) => el * 2)];
// }
// arr = [1,2,3,4,5];
// console.log(doubleAndReturnArgs(arr, 6,7,8,9,10));

// let obj1 = {
//     name: "karan",
//     age: 14,
// }
// let obj2 = {
//     name: "aman",
//     age: 21
// }
// let mergeObjects = (obj1, obj2) => ({
//     ...obj1, ...obj2
// });
// console.log(mergeObjects({a: 1, b: 2}, {c: 3, d: 4}));