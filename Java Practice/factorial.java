package java;
import java.util.*;
public class factorial{
    public static int factorial(int n) {
        int result=1;
        for(int i=1; i<=n; i++){
            result *= i;
        }
        return result;
    }
    public static void main(String[] args) {
        System.out.println("Enter a number");
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        sc.close();
        int sum = factorial(n);
        System.out.println(sum);
    }
}