let todo=[];
let req = prompt("Please enter your request");
console.log(req);

while(true){
    if(req == 'quit'){
        console.log("Quitting app");
        break;
    }

    if(req == 'list'){
        console.log("*************");
        for(let i = 0; i < todo.length; i++){
            console.log(i, todo[i]);
        }
        console.log("*************");
    }else if(req == "add"){
        let task = prompt("Enter task to add to the list");
        todo.push(task);
        console.log("task added");
        console.log("Updated List");
        for(let i = 0; i < todo.length; i++){
            console.log(i, todo[i]);
        }
    }
    else if(req == "delete"){
        let idx = prompt("Enter task index to delete from the list");
        todo.splice(idx, 1);
        console.log("Taks deleted");
        console.log("Updated List");
        for(let i = 0; i < todo.length; i++){
            console.log(i, todo[i]);
        }
    }else{
        console.log("Invalid request");
    }
    req = prompt("Please enter your request");
}