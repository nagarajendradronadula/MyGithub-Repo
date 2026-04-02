package java;
// Write a function which takes in 2 numbers and returns the greater of those two.
import java.util.*;
public class ex3 {
    public static void main(String[] args) {
        System.out.println("Enter two numbers");
        Scanner sc=new Scanner(System.in);
        int a=sc.nextInt();
        int b=sc.nextInt();

        if(a>b){
            System.out.println("a is greater than b");
        }
        else{
            System.out.println("b is greater than a");
        }
    }
}
