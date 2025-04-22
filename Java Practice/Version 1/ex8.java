package java;
//Two numbers are entered by the user,x and n. Write a function to find the value of one number raised to the power of another i.e., xth.
import java.util.*;
public class ex8 {
    public static void main(String[] args) {
        System.out.println("Enter a number and the power to get the result");
        Scanner sc=new Scanner(System.in);
        double x=sc.nextDouble();
        double n=sc.nextDouble();
        
        double res=Math.pow(x,n);
        System.out.println("The result is "+res);
    }
}
