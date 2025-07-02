// // import java.util.*;

// class Practice_1 {

//     public static void main(String[] args) {

//         /*Checking but it prints infinite loop of sysouts

//         // for (;;) {
//         // System.out.println("Hello World!");
//         } */ 

//         /*
//          * the below program is to enter marks on condition
//          * where it first takes the input and checks whether the input 0(quit) or 1(enter marks)
//          * and the marks entered should be 0 >= marks >= 100
//          * and whenever we enter 0 other than marks we quit
//          * and at the end it prints all the marks entered and thanks.
          
         
//          Scanner sc = new Scanner(System.in);
//          System.out.println("Enter 0 to quit and 1 to enter marks!");
//         int chosen = sc.nextInt();

//         List<Integer> marksList = new ArrayList<Integer>();
//         int marks;

//         while (chosen != 0) {
//             if (chosen == 1) {
//                 System.out.println("Enter marks");
//                 marks = sc.nextInt();
//                 if (marks < 101 && marks > 0) {
//                     marksList.add(marks);
//                 } else {
//                     System.out.println("entered marks exceeds the limit of 100");
//                 }
//                 System.out.println("Enter 0 to quit and 1 to enter marks!");
//                 chosen = sc.nextInt();
//             } else {
//                 break;
//             }
            
//         }

//         // for(int i = 0; i < marksList.size(); i++){
//             System.out.println("Your entered marks list: " + marksList);
//             System.out.println("Thank you!");
//             // }
            
//             sc.close();
//         */

//         /*finding the iput number is prime or not

//         Scanner sc = new Scanner(System.in);
//         System.out.println("Enter a number to check for prime!");
//         int num = sc.nextInt();
//         int count = 0;

//         for(int i = 2; i < Math.abs(num/2); i++){
//             if(num % i == 0){
//                 count++;
//             }
//         }

//         if(count > 0){
//             System.out.println("The given number is not a prime number");
//         }else{
//             System.out.println("The given number is prime number");
//         }

//         sc.close(); */

//         /* Pattern questions 
//         int m = 5, n = 5;                                               //*****
//         for(int i = 0; i < m; i++){                                     //*   *
//             for(int j = 0; j < n; j++){                                 //*   *
//                 if(i == 0 || j == 0 || i == m - 1 || j == n - 1){       //*****
//                     System.out.print("*");                              
//                 } else {
//                     System.out.print(" ");;
//                 }
//             }
//             System.out.println();
//         } */
        
//         // for(int i = 0; i < 5; i++){          //*
//         //     for(int j = 0; j <= i; j++){     //**
//         //         System.out.print("*");       //***
//         //     }                                //****
//         //     System.out.println();            //*****
//         // }
        
//         // for(int i = 5; i > -1; i--){         //*****
//         //     for(int j = 0; j <= i; j++){     //****
//         //         System.out.print("*");       //***
//         //     }                                //**
//         //     System.out.println();            //*
//         // }

//         for(int i = 5; i > -1; i--){
//             for(int j = 0; j < i; j++){
//                 System.out.print(" ");
//             }
//             System.out.println("*");
//         }



//     }
// }


// ≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠
// ≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠
// ≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠