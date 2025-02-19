// import java.util.ArrayList;
// import java.util.Collections;
// import java.util.Iterator;

// public class ArrayListExample {
//     public static void main(String[] args) {
//         ArrayList<String> list = new ArrayList<>();

//         // Adding elements
//         list.add("Apple");
//         list.add("Banana");
//         list.add(1, "Mango");
        
//         // Accessing and updating
//         System.out.println("Element at index 1: " + list.get(1));
//         list.set(1, "Orange");
        
//         // Iterating
//         for (String item : list) {
//             System.out.println(item);
//         }
        
//         // Removing elements
//         list.remove("Banana");
        
//         // Sorting
//         Collections.sort(list);
        
//         // Size and clearing
//         System.out.println("Size: " + list.size());
//         list.clear();
//         System.out.println("Is empty: " + list.isEmpty());
//     }
// }


/* import java.util.*;

public class ArrayListExample{
    public static void main(String[] args){
        ArrayList<String> toDoList = new ArrayList<>();

        toDoList.add("Buy groceries");
        toDoList.add("Clean the house");
        toDoList.add("Pay bills");

        System.out.println("Prnting Every item");
        System.out.println();
        for(String item : toDoList){
            System.out.println(item);
        }

        // System.out.println();
        // System.out.println("Removed an item");
        toDoList.remove("Clean the house");

        // System.out.println();
        // System.out.println("Added an item");
        toDoList.add(1, "Call the plumber");

        System.out.println();
        System.out.println("Printing all items (updated)");
        System.out.println();
        for(String item : toDoList){
            System.out.println(item);
        }
    }
} */


import java.util.*;

class Student{
    int id;
    String name;
    double marks;

    public Student(int id, String name, double marks){
        this.id = id;
        this.name = name;
        this.marks = marks;
    }

    public void display(){
        System.out.println("ID: " + id + ", Name: " + name + ", Marks: " + marks);
    }
}

public class ArrayListExample{
    public static void main(String[] args){
        ArrayList<Student> students = new ArrayList<>();

        students.add(new Student(1, "Rohan", 89.6));
        students.add(new Student(2, "Ganesh", 96.3));
        students.add(new Student(3, "Harika", 89.7));


        double max = 0;
        int maxIdx = 0;
        String nameMax = "";

        System.out.println("All students: ");
        for(Student student : students){
            student.display();
            if(max <= student.marks){
                max = student.marks;
                nameMax = student.name;
                maxIdx = student.id;
            }
        }

        System.out.println("Highest marks scored " + max + " obtained by " + nameMax + " with Id " + maxIdx);

    }
}