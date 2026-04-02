package java;
// Write a function to print the sum of all odd numbers from 1 to n.
import java.util.*;
public class ex2 {
    public static int oddSum(int n){
        int sum=0;
        for(int i=1;i<=n;i+=2){    
            sum+= i;
        }
        return sum;
    }
    public static void main(String[] args) {
        System.out.println("Enter a number");
        Scanner sc=new Scanner(System.in);
        int n=sc.nextInt();
        int result=oddSum(n);
        System.out.println("the result from 1 to " + n + " is " + result);
    }
}
