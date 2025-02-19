let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");
let today = new Date();
let formattedDateTime = today.toLocaleString();

document.querySelector("h1").append(` ${formattedDateTime}`);


btn.addEventListener("click", function(){
    let item = document.createElement("li");
    item.innerText = inp.value;

    let delBtn = document.createElement("button")
    delBtn.innerText = "Delete";
    delBtn.classList.add("delete");
    item.appendChild(delBtn);
    ul.appendChild(item);
    console.log(inp.value);
    inp.value = "";
});

ul.addEventListener("click", function(event){
    if(event.target.nodeName == "BUTTON"){
        let listItem = event.target.parentElement;
        console.log(`${listItem.innerText}`);
        listItem.remove();
    }
});