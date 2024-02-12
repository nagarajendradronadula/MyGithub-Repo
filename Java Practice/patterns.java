package java;
//before running this code uncomment the code you need
import java.util.Scanner;
public class patterns{
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        System.out.println("enter vertical line number");
        int n=sc.nextInt();
        //solid rectangle
        // System.out.println("enter horizontal line number");
        // int m=sc.nextInt();
        //solid pattern
        // for(int i=1;i<=n;i++){
        //     for(int j=0;j<=m;j++){
        //         System.out.print("*");
        //     }
        //     System.out.println("*");
        // }

        //hollow rectangle
        // for(int i=1;i<=n;i++){
        //     for(int j=1;j<=m;j++){
        //         if(i==1 || j==1 || i==n || j==m)
        //         System.out.print("*");
        //         else
        //         System.out.print(" ");
        //     }
        //     System.out.println();
        // }

        //right angle triangle or half pyramid
        // for(int i=1;i<=n;i++){
        //     for(int j=1;j<=i;j++){
        //         System.out.print("*");
        //     }
        //     System.out.println();
        // }

        //inverted half pyramid
        // for(int i=n;i>=1;i--){
        //     for(int j=1;j<=i;j++){
        //         System.out.print("*");
        //     }
        //     System.out.println();
        // }

        //mirrored half pyramid
        // for(int i=1;i<=n;i++){
        //     for(int j=1;j<=n-i;j++){
        //         System.out.print(" ");
        //     }
        //     for(int j=1;j<=i;j++){
        //         System.out.print("*");
        //     }
        //     System.out.println();
        // }

        //half pyramid with numbers
        // for(int i=1;i<=n;i++){
        //     for(int j=1;j<=i;j++){
        //         System.out.print(j);
        //     }
        //     System.out.println();
        // }

        //inverted half pyramid with numbers
        // for(int i=n;i>=1;i--){
        //     for(int j=1;j<=i;j++){
        //         System.out.print(j);
        //     }
        //     System.out.println();
        // }

        //mirrored half pyramid with numbers
        // for(int i=1;i<=n;i++){
        //     for(int j=1;j<=n-i;j++){
        //         System.out.print(" ");
        //     }
        //     for(int j=1;j<=i;j++){
        //         System.out.print(j);
        //     }
        //     System.out.println();
        // }
        
        // //floyd's triangle
        // int num=1;
        // for(int i=1;i<=n;i++){
        //     for(int j=1;j<=i;j++){
        //         System.out.print(num+" ");
        //         num++;
        //     }
        //     System.out.println();
        // }

        //0-1 triangle
            // for(int i=1;i<=n;i++){
            //     for(int j=1;j<=i;j++){
            //         int sum=i+j;
            //         if(sum%2==0){
            //         System.out.print("1");
            //         }
            //         else{
            //             System.out.print("0");
            //         }
            //     }
            //     System.out.println();
            // }
    }

}