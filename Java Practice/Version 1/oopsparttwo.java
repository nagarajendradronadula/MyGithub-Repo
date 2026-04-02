package java;
// import bank;
// class Shape{
//     // String color;
//     public void area(){
//         System.out.println("displays area");
//     }
// }

// class Triangle extends Shape{
//     public void area(int l, int h){
//         System.out.println(1/2*l*h);
//     }

// }

// class EquilateralTriangle extends Triangle{
//     public void area(int l, int h){
//         System.out.println(1/2*l*h);
//     }
// }
// class Circle extends Shape{
//     public void area(int r){
//         System.out.println((3.14)*r*r);
//     }
// }

// abstract class Animal{
//     abstract public void walk();
//     Animal(){
//         System.out.println("You are creating a new Animal");
//     }
//     public void eat(){
//         System.out.println("Animal eats");
//     }
// }

// class Horse extends Animal{
//     Horse(){
//         System.out.println("Created a Horse");
//     }
//     public void walk(){
//         System.out.println("Walks on 4 legs");
//     }
// }

// class Chicken extends Animal{
//     public void walk(){
//         System.out.println("Walks on 2 legs");
//     }
// }

// interface Animal{
//     int eyes = 2;//static same for all and cannot change
//     void walk();
// }

// interface Herbivore{
//     System.out.println("Eats Grass")
// }

// class Horse implements Animal, Herbivore{
//     public void walk(){
//         System.out.println("Walks on 4 legs");
//     }
// }

class Student{
    String name;
    static String school;
}

public class oopsparttwo {
    public static void main(String[] args) {
        // Triangle t1 = new Triangle();
        // t1.color = "red";
        // System.out.println(t1.color);
        
        // bank.Account account1 = new bank.Account();
        // account1.name = "customer1";

        // Horse horse = new Horse();
        // horse.walk();
        // // horse.eat();

        Student.school = "ABC";
        Student student1 = new Student();
        student1.name = "Tony";
        System.out.println(student1.school);
    }    
}
