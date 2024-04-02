// let btns = document.querySelectorAll('button');
// btn.onclick = function(){
//     alert("button was clicked");
// }

// function sayHello(){
//     alert("Hello!");
// }

// function sayName(){
//     alert("DNR");
// }

// btn.onclick = sayHello;
// btn.onmouseenter = function(){
//     console.log("you entered a button");
// }

// for(btn of btns){
    // btn.addEventListener('click', sayHello);
    // btn.addEventListener('click', sayName);
//     btn.addEventListener('dblclick', function(){
//         alert("you double clicked a button");
//     });
// }

// let btn = document.querySelector("button");
// btn.addEventListener("click", function(){
//     // console.log("genereated a random color");
//     let h3 = document.querySelector("h3");
//     let randomColor = getRandomColor();
//     h3.innerText = randomColor;

//     let div = document.querySelector("div");
//     div.style.backgroundColor = randomColor;

//     console.log("Color Updated")
// })
// function getRandomColor(){
//     let red = Math.floor(Math.random() * 255);
//     let green = Math.floor(Math.random() * 255);
//     let blue = Math.floor(Math.random() * 255);

//     let color = `rgb(${red}, ${green}, ${blue})`;
//     return color;
// }

// let p = document.querySelector("p");

// p.addEventListener("click", function(){
//     console.log("para was clicked");
// })

// let box = document.querySelector(".box");
// box.addEventListener("mouseenter", function(){
//     console.log("mouse inside div");
// })

// let btn = document.querySelector("button");
// let p = document.querySelector("p");
// let h1 = document.querySelector("h1");
// let h3 = document.querySelector("h3");

// function changeColor(){
//     console.dir(this.innerText);
//     this.style.backgroundColor= 'blue';
// }

// p.addEventListener("click", changeColor)
// h1.addEventListener("click", changeColor)
// h3.addEventListener("click", changeColor)
// btn.addEventListener("click", function(event){
//     console.log(event);
//     console.log("Button clicked");
// })

// let input = document.querySelector("input");
// input.addEventListener("keydown", function(event){
//     console.log(event);
//     console.log(event.key);
//     console.log(event.code);
//     console.log("key was pressed");
// });
// input.addEventListener("keydown", function(event){
//     console.log(event.code);
//     if(event.code == "ArrayUp"){
//         console.log("charater moves forward");
//     }else if(event.code == "ArrayDown"){
//         console.log("charater moves backward");
//     }else if(event.code == "ArrayLeft"){
//         console.log("charater moves leftward");
//     }else if(event.code == "ArrayRight"){
//         console.log("charater moves rightward");
//     }
// });
// input.addEventListener("keyup", function(){
//     console.log("key was released");
// });

// let form = document.querySelector("form");

// form.addEventListener("submit", function(event){
    // event.preventDefault();
    // alert("Form submitted");
    // input = document.querySelector("input");

    // user = document.querySelector("#user");
    // pass = document.querySelector("#pass");
    // let user = this.elements[0];
    // let pass = this.elements[1];

    // console.dir(input);
    // console.log(input.value);

//     console.log(user.value);
//     console.log(pass.value);

//     alert(`Hi ${user.value} your password is set to ${pass.value}`);
// })

// form.addEventListener("submit", function(event){
//     event.preventDefault();
// })
// let user = document.querySelector("#user");
// user.addEventListener("change", function(){
//     console.log("change event");
//     console.log("final value= ", this.value);
// })
// user.addEventListener("input", function(){
//     console.log("input event");
//     console.log("final value= ", this.value);
// })

// let input = document.querySelector("#text");
// let p = document.querySelector("p");

// input.addEventListener("input", function(){
//     console.log(input.value);
//     p.innerText = input.value;
// })

// let box = document.querySelector(".box");
// let p = document.querySelector("p");

// box.addEventListener("mouseout", function(){
//     console.log("Mouse out of box");
// });

// scroll = 0;
// window.onscroll = function(){
//     const curr = window.scrollBy;
    // if(curr > scroll){
    //     console.log("User is scrolling down");
    // }else{
    //     console.log("user is scrolling up");
    // }
// console.log("Scroll inside box");
// }

// document.addEventListener("DOMContentLoaded", function(event){
//     console.log("Content loaded")
// })

// let input = document.querySelector("#text");
// input.addEventListener("keypress", function(){
//     console.log("key pressed");
// })

// let randomBtn = document.createElement("button");
// randomBtn.innerText = "Click me!";
// randomBtn.addEventListener("click", function(){
//     console.log("Clicked!");
//     this.style.backgroundColor = "green";
// });
// document.querySelector("body").append(randomBtn);


// const inputField = document.getElementById("inputField");
// const filteredValue = document.getElementById("filteredInput");

// inputField.addEventListener("input",function(){
//     const inputValue = inputField.value;
//     const filteredValue = inputValue.replace(/[^a-zA-Z\s]/g, "");
//     filteredInput.value = filteredValue;
// });

// let h1 = document.querySelector("h1");
// h1.innerText = filteredValue;
// document.querySelector("body").append(h1);
