package java;
import java.util.Scanner;
public class evennum{
    public static void main(String[] args) {
        System.out.print("Enter a number");
        Scanner sc= new Scanner(System.in);
        int ent= sc.nextInt();
        for(int count=0;count<=ent;){
            System.out.println(count);
            count+=2;
        }
    }
}