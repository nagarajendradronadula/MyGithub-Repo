package java;
import java.util.*;

public record functions(){

    // public static int calSum(int a,int b){
    //     int sum=a+b;
    //     return sum;
    // }
    // public static void main(String[] args) {
    //     Scanner sc=new Scanner(System.in);
    //     int a=sc.nextInt();
    //     int b=sc.nextInt();
        
    //     int sum=calSum(a,b);
    //     System.out.println(sum);
    // }
    public static void printFactorial(int n){
        if(n<0){
            System.out.println("Invalid number");
            return;
        }
        else{
            int factorial=1;
            for(int i=n;i>=1;i--){
                factorial=factorial*i;
                System.out.println(factorial);
            }
        }
    }
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        int n=sc.nextInt();
        printFactorial(n);
    }
}