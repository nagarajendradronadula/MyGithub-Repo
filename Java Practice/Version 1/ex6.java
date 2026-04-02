package java;
// write an infinite loop using do-while condition
import java.util.*;
public class ex6 {
    public static void main(String[] args) {
        System.out.println("Enter a number");
        Scanner sc=new Scanner(System.in);
        int n=sc.nextInt();
    
        do{
            System.out.println("This is a loop");
        }while(n>=0);
    }
}