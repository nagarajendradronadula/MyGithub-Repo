package java;
import java.util.Scanner;
public class rectanglepat{
    public static void main(String[] args){
        Scanner sc=new Scanner(System.in);
        System.out.println("enter vertical line number");
        int n=sc.nextInt();
        System.out.println("enter horizontal line number");
        int m=sc.nextInt();
        //solid pattern
        // for(int i=1;i<=n;i++){
        //     for(int j=0;j<=m;j++){
        //         System.out.print("*");
        //     }
        //     System.out.println("*");
        // }

        //hollow rectangle
        for(int i=1;i<=n;i++){
            for(int j=1;j<=m;j++){
                if(i==1 || j==1 || i==n || j==m)
                System.out.print("*");
                else
                System.out.print(" ");
            }
            System.out.println();
        }
    }
}