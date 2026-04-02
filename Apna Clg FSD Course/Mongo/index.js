const mongoose = require("mongoose");

// mongoose.connect("mongodb://localhost:27017/test");

main()
.then(() => console.log("Connection succesful") )
.catch(err => console.log(err));

async function main(){
    await mongoose.connect('mongodb://localhost:27017/test'); 
}

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
});

const User = mongoose.model("User", userSchema);
// const Employee = mongoose.model("Employee", userSchema);

// User.insertMany([
//     {name:"Tony", email:"tony@gmail.com", age:50},
//     {name:"Peter", email:"peter@gmail.com", age:30},
//     {name:"Bruce", email:"bruce@gmail.com", age:47},
// ]).then((res) => {
//     console.log(res);
// });

// const user2 = new User({
//     name: "eve",
//     email: "eve@yahoo.in",
//     age: 41
// });

// user2
// .save()
// .then((res) => {
//     console.log(res);
// })
// .catch((err) => {
//     console.log(err);
// });

// User.findById('6676804f0cb84c87e2658916').then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// });

// User.findByIdAndUpdate('6676804f0cb84c87e2658916', {age: 42}, {new: true}).then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// });

User.deleteOne({}).then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
});