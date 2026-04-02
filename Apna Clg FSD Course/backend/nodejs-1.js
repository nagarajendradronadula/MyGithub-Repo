// let n = 5;

// for(let i = 0; i < n; i++){
//     console.log("hello", i);
// }
// console.log("bye");

// console.log(process.argv);

// let args = process.argv;
// for(let i = 2; i < args.length; i++){
//     console.log("hello ",args[i]);
// }

// const val = require("./math");
// console.log(val);

// const info = require("./fruits");
// console.log(info);

// const figlet = require('figlet');
// figlet("TYSON", function (err, data) {
//     if (err) {
//       console.log("Something went wrong...");
//       console.dir(err);
//       return;
//     }
//     console.log(data);
//   });

import {sum, PI} from "./math.js"
console.log(sum(1,PI));