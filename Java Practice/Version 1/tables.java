package java;
import java.util.Scanner;
public class tables {
    public static void main(String[] args) {
        System.out.print("Enter a number: ");
        Scanner sc= new Scanner(System.in);
        int n=sc.nextInt();
        for(int i=1;i<=20;i++)
        System.out.println(i*n);
    }
}
