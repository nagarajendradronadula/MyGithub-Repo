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

// let jsonRes = '{"fact": "In contrast to dogs, cats have not undergone major changes during their domestication process.","length": 94}';
// console.log(jsonRes);
// let validRes = JSON.parse(jsonRes);
// console.log(validRes.fact);

// let url = "https://catfact.ninja/fact";
// let url2 = "https://dog.ceo/api/breeds/image/random";
// fetch(url)
//     .then((res) => {
//         // console.log(res);
//         return res.json();
//     })
//     .then((data) => {
//         console.log("data1 =", data.fact);
//         return fetch(url);
//     })
//     .then((res) => {
//         // console.log(res);
//         return res.json();
//     })
//     .then((data2) => {
//         console.log("data2 =",data2.fact);
//     })
//     .catch((err) => {
//         console.log("Error-", err);
//     })
// async function getFacts(){
//     try{
//     let res = await fetch(url);
//     let data = await res.json();    
//     console.log(data.fact);
//     let res2 = await fetch(url);
//     let data2 = await res2.json();    
//     console.log(data2.fact);
// } catch (err){
//     console.log("Error-", err);
// }
// console.log("Bye");
// }
// let btn = document.querySelector("button");
// async function getFacts(){
//     try{
//         let res = await axios.get(url);    
//         // console.log(res.data.fact);
//         return res.data.fact;
//     } catch (err){
//         console.log("Error-", err);
//         return "No fact found";
//     }
// }
// btn.addEventListener("click", async () => {
//     let fact = await getFacts();
//     // console.log(fact);
//     let p = document.querySelector('#result');
//     p.innerText = fact;
// })
// async function getImage(){
//     try{
//         let res = await axios.get(url2);    
//         
//         return res.data.message;
//     } catch (err){
//         console.log("Error-", err);
//         return "/";
//     }
// }
// btn.addEventListener("click", async () => {
//    let link = await getImage();
// //    console.log(link);
//     let img = document.querySelector("#result");
//     img.setAttribute("src", link);
// })

// const url = "https://icanhazdadjoke.com/";

// async function getJokes() {
//     try {
//         const config = { headers: {Accept: "application/json"}};
//         let res = await axios.get(url, config);
//         console.log(res.data);
//     }
//     catch (err) {
//         console.log(err);
//     }
// }

let url = "http://universities.hipolabs.com/search?name=";
let btn = document.querySelector("button");
btn.addEventListener("click", async ()=>{
    let country = document.querySelector("input").value;
    // console.log(country);
    let colArr = await getColleges(country);
    // console.log(colArr);
    show(colArr);
})

function show(colArr){
    let list = document.querySelector("#list");
    list.innerText = "";
    for(col of colArr){
        // console.log(col.name);
        let li = document.createElement("li");
        li.innerText = col.name;
        list.appendChild(li);
    }
}
// let country = "Nepal";
async function getColleges(country){
    try{
        let res = await axios.get(url + country);
        // console.log(res.data);
        return res.data;
    }catch(err){
        // console.log("data not found", err);
        return [];
    }
}