// let arr = [1, 2, 3];
// let arr2 = [1, 2, 3];
// arr.sayHello = () => {
//     console.log("Hello!");
// }
// arr2.sayHello = () => {
//     console.log("Hello!");
// }

// function PersonMaker(name, age) {
//     const person = {
//         name: name,
//         age: age,
//         talk(){
//             console.log(`Hi, my name is ${name}`);
//         }
//     };
//     return person;
// }

// let p1 = PersonMaker("John", 20);
// let p2 = PersonMaker("Jane", 21);

// p1.talk() === p2.talk(); //false so this method is not a good way and this is called factory function

//Constructors - doesn't return anyhing & start with capital
// function Person(name, age) {
//         this.name = name;
//         this.age = age;
// }
// Person.prototype.talk = function () {
//     console.log(`Hi, my name is ${this.name}`);
// }

// class Person{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
//     talk(){
//         console.log(`Hi, my name is ${this.name}`);
//     }
// }

// let p1 = new Person("John", 20);
// let p2 = new Person("Jane", 21);

// p1.talk === p2.talk; //true

class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    talk(){
        console.log(`Hi, my name is ${this.name}`);
    }
}

class Student extends Person{
    constructor(name, age, marks){
        super(name, age); //parent class constructor is being called
        this.marks = marks;
    }
}

class Teacher extends Person{
    constructor(name, age, subject){
        super(name, age);
        this.subject = subject;
    }
}