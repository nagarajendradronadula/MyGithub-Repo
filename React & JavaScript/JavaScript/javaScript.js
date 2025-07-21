/*

Refernces: 
-> https://developer.mozilla.org/en-US/docs/Web/JavaScript/
-> https://262.ecma-international.org/ (ECMA Script)
->

Video Reference:
-> https://youtu.be/sscX432bMZo?si=w3XdyVtklIUvvodo (Chai aur Code - Javascript in 1 Shot in Hindi | Part 1 )
-> https://youtu.be/_TjtAyMkiTI?si=y8KrpH9GQr9emg2Z (Chai aur Code - Javascript in 1 Shot in Hindi | Part 2 )

*/



/* ****************************  chp - 1 Var, Let, Const  ***************************** */

// console.log("DNR");

// const accountId = 1234;
// let accountEmail = "abcd@google.com";
// var password = "12345";
// accountCity = "Delhi"; //not recommended without prefix const or var
// console.table([accountId, accountEmail, password, accountCity]);

// accountId = 221221;
// accountEmail = "xyz@abc.com";
// password = "09876";
// accountCity = "Mumbai";

/*
Preferred not to use var
because of issue in block scope and functional scope
*/

// console.log(accountId);

// console.table([accountId, accountEmail, password, accountCity]);


/* *******************************  chp - 2 Data Types and ECMA Standards  ********************************** */

// "use strict"; //treat all js code as newer version

// alert( 3 + 3) //this only works for browser but not in nodejs

// let name = "Tyson"; //string
// let age = 18; //number
// let isLoggedin = true; //boolean

/* 
number => 2, 3.2, -6 basically all numbers from 5e-324 upto 1.7976931348623157e+308 other than these its called infinity.
bigint => int with no limit
string => "" to store group of character values
boolean => true(1) or false(0)
null => standalone value
undefined => no value
symbol => unique
NaN => not a number
*/

// object

// console.log(typeof "hitesh");
// console.log(typeof null);


/* ********************************  chp - 3 (Part - 1) Datatype Conversion  ***************************** */

// let score = "33abc";

// console.log(typeof score);
// console.log(typeof (score));

// let valueInNumber = Number(score);
// console.log(typeof valueInNumber);

// "33" => 33
// "33abc" => NaN (not a number)
// true = 1; false = 0

// let isLoggedIn = 1;

// let booleaanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleaanIsLoggedIn);

//1 => true; 0 => false
// "" => false
// "dnr" => true


/* ********************************  chp - 3 (Part - 2) Operators  ***************************** */

// let value = 3;
// let negVal = -value;
// console.log(negVal);

// console.log(2 + 3);
// console.log(2 - 3);
// console.log(2 * 3);
// console.log(2 / 3);
// console.log(2 % 3);
// console.log(2 ** 3);

// let str1 = "hello";
// let str2 = "world";
// let str3 = str1 + str2;
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log(true);
// console.log(+true);
// console.log(+"");

// let num1, num2, num3;
// num1 = num2 = num3 = 2 + 3;

// let gameCounter = 100;
// gameCounter++; //post-increment => updates after using the value
// console.log(gameCounter);
// ++gameCounter; //pre-increment => updates before using the value
// console.log(gameCounter);


/* ********************************  chp - 4 Comparison of Datatypes  ***************************** */

// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 <= 1);
// console.log(2 == 1);
// console.log(2 != 1);

// console.log( "2" > 1);
// console.log( "02" > 1);

// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0);

/*
The reason is that an equality check == and comparisons >, <, >=, <=, !=, ===, !== work differently.
Comparisons convert null to number, treating it as 0.
That's why null >= 0 is true and null > 0 (or) null == 0 is false.
*/

// console.log(undefined == 0);
// console.log(undefined > 0);
// console.log(undefined < 0);

// === -> strict equality check
// == -> loose equality check

// console.log("2" === 2);

/* ********************************  Datatypes Summary  ***************************** */

// Primitive data types (call by value or pass by value) => here execution is done on the copy of the value
// there are 7 types => number, string, boolean, null, undefined, symbol, bigint

//examples
// const score = 100;
// const scoreValue = 100.3;
// const isLoggedIn = false;
// const outsideTemp = null;
// let userEmail;
// const symbol = Symbol('123');
// const bigInt = 9007199254740991n;

// Reference or Non-Primitive data types (call by reference or pass by reference) => here execution is done on the actual value
// there are 3 types => object, function, array

//examples
// const fruits = ["apple", "banana", "orange", "mango"];
// let myObj = {
//     name: "rajendra",
//     age: 21,
// }
// const myFunc = function() { //both the ways are same this and the next line
// function myFunc() {
//     console.log("hello world!");
// }

//javascript is a dynamically typed language

// primitive data types are stored in stack method in memory and any change done would not change the actual value or initialised value.
// and reference or non-primitive data types are stored in heap method in memory.

/* ********************************  chp - 5 Strings ***************************** */

// const name = "rajendra";
// const repoCount = 5;

// console.log(`name is ${name} and repo count is ${repoCount}`);
// this is called template literals or string interpolation by which we can use variables inside the string which make the code more readable.

// const gameName = new String("Mine-craft");
// to initialise a String as an object or kind of variable for more accessibility

// console.log(gameName[2]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(3)); //charAt(index)
// console.log(gameName.indexOf('t')); //indexof(character)
// console.log(gameName.slice(0, 4));
// console.log(gameName.slice(-5, 0)); //slice(start index, end index)

// const newString = "    rajendra    ";
// console.log(newString);
// console.log(newString.trim());

// const url = "https://google.com";
// console.log(url);
// console.log(url.replace("google", "youtube"));
// console.log(url.includes("google"));

// const random1 = "the-dog-is-barking";
// console.log(random1.split("-"));

/* ********************************  chp - 6 Numbers & Maths ***************************** */

/* ++++++++++++++++++++++++++++  Number  ++++++++++++++++++++++++++++++ */

// const score = 400;
// console.log(score);
// const balance = new Number(100);
// console.log(balance);
// console.log(balance.toString());
// console.log(balance.toFixed(2));

// const otherNumber = 123.456789;
// console.log(otherNumber.toPrecision(1));

// const hundreds = 100000000;
// console.log(hundreds.toLocaleString("en-IN"));

// console.log(Number.MAX_VALUE);
// console.log(Number.MIN_VALUE);
// console.log(Number.MAX_SAFE_INTEGER);
// console.log(Number.MIN_SAFE_INTEGER);

/* ++++++++++++++++++++++++++++  Math  ++++++++++++++++++++++++++++++ */

// console.log(Math);
// console.log(Math.abs(-2));
// console.log(Math.round(8.429832)); //rounds to nearest integer
// console.log(Math.ceil(8.429832)); //rounds to nearest upper integer limit
// console.log(Math.floor(8.429832)); //rounds to nearest lower integer limit
// console.log(Math.sqrt(64));
// console.log(Math.min(4,6,7,3,8,5));
// console.log(Math.max(4,6,7,3,8,5));

// console.log(Math.random());
// console.log(Math.floor(Math.random() * 10) + 1);

// const min = 10;
// const max = 20;
// console.log(Math.floor(Math.random() * (max - min + 1)) + min);


/* ********************************  chp - 7 Dates ***************************** */

// let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let createdDate = new Date(2024, 0, 2);
// let createdDate = new Date(2024, 0, 2, 5, 30, 34);
// let createdDate = new Date("2024-01-02");
// let createdDate = new Date("12-01-2024");
// console.log(createdDate.toLocaleString());

// let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(createdDate.getTime());

// console.log(Math.floor(Date.now() / 1000));

// let newDate = new Date();
// console.log(newDate);
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());
// console.log(newDate.getFullYear());

// console.log(`it is ${newDate.getDate()} / ${newDate.getMonth() + 1} / ${newDate.getFullYear()}, ${newDate.getHours()} : ${newDate.getMinutes()} : ${newDate.getSeconds()}`);

// newDate = newDate.toLocaleString('en-IN', {
//     weekday: "long",
//     day: "numeric",
//     month: "long",
//     year: "numeric",
//     hour: "numeric",
//     minute: "numeric",
//     second: "numeric"
// })

// console.log(newDate);


/* ********************************  chp - 8 (Part - 1) Arrays ***************************** */

// const myArr = [0, 1, 2, 3, 4];
// const heroes = ["thor", "spiderman", "ironman"];
// const myArr2 = new Array(1,2,3,4,5);

// console.log(myArr[0]);

// myArr.push(6);
// myArr.push(7);
// myArr.pop();

// myArr.unshift(9);
// myArr.shift();

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join();

// console.log(myArr);
// console.log(typeof myArr);
// console.log(newArr);
// console.log(typeof newArr);

//slice and splice

// console.log("A", myArr);
// const myArr3 = myArr.slice(1,3);
// console.log("B", myArr);
// console.log("Slice: ", myArr3);
// const myn2 = myArr.splice(1,3);
// console.log("C", myArr);
// console.log("Splice: ", myn2);

/* ********************************  chp - 8 (Part - 2) Arrays ***************************** */

const marvelHeroes = ["thor", "ironman", "spiderman"];
const dcHeroes = ["superman", "flash", "batman"];

// marvelHeroes.push(dcHeroes);
// console.log(marvelHeroes);

let heroes = marvelHeroes.concat(dcHeroes);

console.log(heroes);
// console.log(marvelHeroes);
// console.log(dcHeroes);