package java;
//write a function that takes in age as input and returns if that person is eligible to vote or not. A person of age>18 is eligible to vote.
import java.util.*;
public class ex5 {
    public static void age(int age) {
        if(age>=18){
            System.out.println("You are eligible to vote");
        }
        else{
            System.out.println("Sorry! You are not eligible");
        }
    }
    public static void main(String[] args) {
        System.out.println("Enter the age");
        Scanner sc=new Scanner(System.in);
        int age=sc.nextInt();
        age(age);
    }
}
