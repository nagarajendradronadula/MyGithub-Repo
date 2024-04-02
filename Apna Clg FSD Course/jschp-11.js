// let div = document.querySelector("div");
// let ul = document.querySelector("ul");
// let lis = document.querySelectorAll("li");

// div.addEventListener("click", function(){
//     console.log("div clicked");
// })

// ul.addEventListener("click", function(event){
//     event.stopPropagation();
//     console.log("ul clicked");
// })

// for(li of lis){
//     li.addEventListener("click", function(event){
//         event.stopPropagation();
//         console.log("li clicked");
// 

// function one(){
//     return 1;
// }
// function two(){
//     return one() + one();
// }
// function three(){
//     let ans = two() + one();
//     console.log(ans);
// }

// setTimeout(function() {
//     console.log("Apna College");
// }, 2000);
// console.log("Hello World!");

h1 = document.querySelector("h1");
function changeColor(color, delay){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            h1.style.color = color;
            resolve("color changed");
        }, delay);
    });
}
changeColor("red", 1000)
.then(() => {
    console.log("red color was changed");
    return changeColor("orange", 1000);
})
.then(() => {
    console.log("orange color was changed");
    return changeColor("green", 1000);
})
.then(() => {
    console.log("green color was changed");
    return changeColor("yellow", 1000);
})
.then(() => {
    console.log("yellow color was changed");
    return changeColor("blue", 1000);
})
.then(() => {
    console.log("blue color was changed"); 
})
// function changeColor(color, delay, nextColorChange){
//     setTimeout(() => {
//         h1.style.color = color;
//         if(nextColorChange) nextColorChange();
//     }, delay);
// }
// changeColor("red", 1000, () => {
//     changeColor("orange", 1000, () => {
//         changeColor("green", 1000, () => {
//             changeColor("yellow", 1000, () => {
//                 changeColor("blue", 1000);
//             });
//         });
//     });
// });

// let data = "";
// function saveToDB(data, success, failure){
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     if(internetSpeed > 4){
//         success();
//     }else{
//         failure();
//     }
// }
// saveToDB("apna college", () => {
//     console.log(`Success: your data was saved ${data}`);
// },() => {
//     console.log(`Failure: your data was not saved ${data}`)
// });


// let data = "";
// function saveToDB(data) {
//     return new Promise((resolve, reject) => {
//         let internetSpeed = Math.floor(Math.random() * 10) + 1;
//         if (internetSpeed > 4) {
//             resolve("success: your data was saved");
//         } else {
//             reject("failure: your data was not saved");
//         }
//     });
// }
// let request;
// request = 
// saveToDB("apna college")  // request = promsie object
// console.log(request);
// request
// .then(() => {
//     console.log("promise resolved");
// })
// .catch(() => {
//     console.log("promise was rejected");
// });
// saveToDB("apna college")
//     .then((result) => {
//         console.log("data1 was saved and promise resolved");
//         console.log(result);
//         return saveToDB("hello world!");
//         // .then(() =>{
//         //     console.log("data2 was saved");
//         // })
//     })
//     .then ((result) => {
//         console.log("data2 was saved");
//         console.log(result);
//         return saveToDB("DNR");
//     })
//     .then ((result) => {
//         console.log("data3 was saved");
//         console.log(result);
//         })
//     .catch((error) => {
//         console.log("a promise was rejected");
//         console.log(error);
//     });