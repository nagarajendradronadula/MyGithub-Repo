package java;
//Write a function that takes in the radius as input and returns the greater of those two.
import java.util.*;

public class ex4 {
    public static double circumference(double n){
        double result=0;
        double pi=3.14;
        result=2*pi*n;
        return result;
    }
    public static void main(String[] args) {
        System.out.println("Enter a number to get the circumference");
        Scanner sc=new Scanner(System.in);
        double n=sc.nextDouble();
        double res=circumference(n);
        System.out.println("The result is " +res);

    }
}
