// for(let i = 1; i < 16; i = i+2){
//     console.log(i);
// }

// for(let i = 1; i <= 10; i++){
//     console.log(i * 5);
// }

// for(let i = 1 ; i <= 4; i++){
//     console.log(`outer loop ${i}`);
//     for(let j = 0; j <= 3; j++){
//         console.log(j);
//     }
// }

// let i = 0;
// while(i <= 20){
//     console.log(i);
//     i++;
// }

// let favMovie = "Bahubali";
// let guess = prompt("Enter your favourite movie");
// while(guess != favMovie && guess != "quit"){
//     guess = prompt("Try again! You are close to the answer");
// }

// if(favMovie == guess){
//     alert("Congratulations!! You guessed it right.");
// }else{
//     alert("You quit the game");
// }

// let fruits = [["mango", "apple", "banana"], ["litchi", "orange", "grapes"]];

// for(let i = 0; i < fruits.length; i++){
//     console.log(`list #${i}`);
//     for(let j = 0; j < fruits[i].length; j++){
//         console.log(j, fruits[i][j]);
//     }
// }

// for(object of fruits){
//     for(fruit of object){
//         console.log(fruit);
//     }
// }

// for(char of "hello"){
//     console.log(char);
// }

// let arr = [1,2,3,4,5,6,2,3];
// let num = 2;
// console.log(arr);
// console.log(num);
// for(let i = 0; i <arr.length; i++){
//     if(arr[i] == num){
//         console.log(arr.splice(i,1));
//     }
// }
// console.log(arr);

// let num = '287152';
// let num = prompt("Enter a number");
// let count = num.length;
// console.log(count);

// const num = prompt("Enter a number");
// let num = 45682;
// let add = 0 ;
// for(let i of num){
//     // let temp = num[i];
//     add = add + num[i];
//     // console.log(num[i]);
// }

// let num = [];
// let size = prompt("Enter size of the array");
// for(let i = 0; i < size; i++){
//     num[i] = Number(prompt("Enter number"));
// }
// let add = 0;
// let i = 0;
// while(i < num.length){
//     add = add + num[i];
//     i++;
// }
// console.log(add);

// let n = 5;
// let n = prompt("Enter a number");
// let fact = 1;
// for(let i = 1; i <= n; i++){
//     fact = fact * i;
// }
// console.log(fact);
// let largest = 0;
// for(let i = 0; i <= 5; i++){
//     if(num[i] > largest){
//         largest = num[i];
//     }
// }
// console.log(largest);