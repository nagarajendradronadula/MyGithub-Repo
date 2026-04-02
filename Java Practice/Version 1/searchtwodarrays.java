package java;
import java.util.*;
public class searchtwodarrays {
    public static void main(String[] args) {
        System.out.println("Enter rows and columns of matrix");
        Scanner sc=new Scanner(System.in);
        int rows=sc.nextInt();
        int cols=sc.nextInt();

        int[][] numbers= new int[rows][cols];
        //input
        System.out.println("Enter data");
        for(int i=0;i<rows;i++){
            for(int j=0;j<cols;j++){
                numbers[i][j]=sc.nextInt();
            }
        }

        //output
        System.out.println("Given matrix data");
        for(int i=0;i<rows;i++){
            for(int j=0;j<cols;j++){
                System.out.print(numbers[i][j]+" ");
            }
            System.out.println();
        }

        //finding the number
        System.out.println("Enter the number you need to search");
        int n=sc.nextInt();
        for(int i=0;i<rows;i++){
            for(int j=0;j<cols;j++){
                if(numbers[i][j]==n){
                    System.out.println("your searched number is found at location( " + i + "," + j + " )");
                }
                // else{
                //     System.out.println("The given number is not found in the matrix");
                // }
            }
        }

    }
}
