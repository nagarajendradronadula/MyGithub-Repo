package java;
//Enter 3 numbers from the user & make a function to print their average.

import java.util.*;

public record ex1(){
    public static void main(String[] args) {
    System.out.println("Enter 3 numbers for average");
    Scanner sc=new Scanner(System.in);
    int a= sc.nextInt();
    int b= sc.nextInt();
    int c= sc.nextInt();

    int avg=(a+b+c)/3;
    System.out.println("The average is "+ avg);
    }
}