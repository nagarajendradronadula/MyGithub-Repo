package java;
import java.util.Scanner;
public class sumnatural {
    public static void main(String[] args) {
        System.out.print("Enter number: ");
        Scanner sc=new Scanner(System.in);
        int n= sc.nextInt();
        int i=1;
        int  sum=0;
        while(i<=n){
             sum+=i;
            i++;
        }
        // for(int i=1;i<=n;i++){
        //     sum+=i;
        // }
        System.out.println(sum);
    }
}
