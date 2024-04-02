// async function greet() {
//     throw "weak connection";
//     return "hello!";
// }
// greet()
//     .then((result) => {
//         console.log("promise resolved");
//         console.log("result was ", result);
//     })
//     .catch((error) => {
//         console.log("promise was rejected");
//         console.log("error was ", error);
//     });

// let demo = async () => {
//     return 5;
// };

// function getNum() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let num = Math.floor(Math.random() * 10) + 1;
//             console.log(num);
//             resolve();
//         }, 1000);
//     });
// }
// async function demo() {
//     await getNum();
//     await getNum();
//     await getNum();
//     await getNum();
//     await getNum();
//     await getNum();
//     await getNum();
//     await getNum();
//     getNum();
// }

// h1 = document.querySelector("h1");
// function changeColor(color, delay){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let num = Math.floor(Math.random() * 5 + 1);
//             if(num > 3){
//                 reject("promise rejected");
//             }
            
//             h1.style.color = color;
//             console.log(`color change ${color}`);
//             resolve();
//         }, delay);
//     });
// }
// async function demo(){
//     try{
//         await changeColor("red", 1000);
//         await changeColor("orange", 1000);
//         await changeColor("green", 1000);
//         await changeColor("blue", 1000);
//     }catch(error){
//         console.log("error caught!");
//         console.log(error);
//     }

//     let a = 5;
//     console.log(a);
//     console.log(`value of a is ${a + 3}`);
// }

let jsonRes = '{"fact": "In contrast to dogs, cats have not undergone major changes during their domestication process.","length": 94}';
console.log(jsonRes);
let validRes = JSON.parse(jsonRes);
console.log(validRes.fact);