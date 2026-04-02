package java;
import java.util.*;
class sample{
public static void main(String []args)
    {
        System.out.println("enter a number");
        Scanner sc= new Scanner(System.in);
        int row=sc.nextInt();
        int i,j;
        for(i=0; i<row; i++)
        {
            for(j=0; j<=i; j++)
            {
                System.out.print("*");
            }
            System.out.println();
        }
    }
}