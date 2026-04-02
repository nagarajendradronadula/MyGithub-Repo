
public class patterns{
    public static void main(String []args){
        /* 
        
        Print the pattern (Solid Rectangle)
        *****
        *****
        *****
        *****
        ==> height = 4 & width = 5

        int n = 4, m = 5
        for(int i = 1; i <= n; i++){ //height
            for(int j = 1; j <= m; j++){ //width
                System.out.print("*");
            }
            System.out.println();
        }

         */


        /* 

        Print the following pattern (Hollow Rectangle)
        *****
        *   *
        *   *
        *****
        ==> height = 4 & width = 5

        int n = 4, m = 5;
        for(int i = 1; i <= n; i++){ //height
            for(int j = 1; j <= m; j++){ //width
                if(i == 1 || j == 1 || i == n || j == m){
                    System.out.print("*");
                } else {
                    System.out.print(" ");
                }
            }
            System.out.println();
        }
         */


        /* 
        
        Print the following pattern (Half Pyramid / Right Angle Triangle)
        *
        **
        ***
        ****
        ==> height = 4 & width = 4

        int n = 4;
        for(int i = 1; i <= n; i++){
            for(int j = 1; j <= i; j++){
                System.out.print("*");
            }
            System.out.println();
        }
         */


        /* 
        
        Print the following pattern (Inverted Half Pyramid / Inverted Right Angle Pyramid)
        ****
        ***
        **
        *
        ==> height = 4 & width = 4

        int n = 4;
        for (int i = n; i > 0; i--){
            for(int j = 1; j <= i; j++){
                System.out.print("*");
            }
            System.out.println();
        }
         */

        
        /* 
        
        Print the following pattern (Mirrored Half Pyramid / Mirrored Right Angle Triangle)
           *
          **
         ***
        ****
        ==> height = 4 & width = 4

        int n = 4;
        for(int i = 1; i <= n; i++){
            for(int j = 1; j <= n - i; j++){
                System.out.print(" ");
            }
            for(int k = 1; k <= i; k++){
                System.out.print("*");
            }
            System.out.println();
        }
         */


        /* 
        
        Print the following pattern (Half Pyramid With Numbers)
        1
        12
        123
        1234
        12345
        ==> height = 5 & width = 5

        int n = 5;
        for(int i = 1; i <= n; i++){
            for(int j = 1; j <= i; j++){
                System.out.print(j);
            }
            System.out.println();
        }
         */


        /* 
        
        Print the following pattern (Inverted Half Pyramid With Numbers)
        12345
        1234
        123
        12
        1
        ==> height = 5 & width = 5

        int n = 5;
        for(int i = n; i >= 1; i--){
            for(int j = 1; j <= i; j++){
                System.out.print(j);
            }
            System.out.println();
        }

        (or)

        for(int i = 1; i <= n; i++){
            for(int j = 1; j <= n-i+1; j++){
                System.out.print(j);
            }
            System.out.println();
        }
         */
        

        /* 
        
        Print the following pattern (Floyd's Triangle)
        1
        2  3
        4  5  6
        7  8  9  10
        11 12 13 14 15
        ==> height = 5 & width = 5

        int n = 5, counter = 1;
        for(int i = 1; i <= n; i++){
            for(int j = 1; j <= i; j++){
                System.out.print(counter++ + " ");
            }
            System.out.println();
        }
         */

        
        /* 
        
        Print the following pattern ( 0 - 1 Triangle)
        1
        0 1
        1 0 1
        0 1 0 1
        1 0 1 0 1
        ==> height = 5 & width = 5

        int n = 5;
        for(int i = 1; i <= n; i++){
            for(int j = 1; j <= i; j++){
                if((i + j) % 2 == 0 )
                    System.out.print("1 ");
                else
                    System.out.print("0 ");
            }
            System.out.println();
        }
         */


        /* 
        
        Print the following pattern (Solid Rhombus)
            *****
           *****
          *****
         *****
        *****
        ==> height = 5; width = 9 (stars width = 5)

        int n = 5;
        for(int i = 1; i <= n; i++){
            for(int j = 1; j <= n - i; j++){
                System.out.print(" ");
            }
            for(int j = 1; j <= n; j++){
                System.out.print("*");
            }
            System.out.println();
        }
         */


        /* 
        
        Print the following pattern (Number Pyramid)
             1         
            2 2       
           3 3 3     
          4 4 4 4   
         5 5 5 5 5 
        ==> height = 5 & width = 5

        int n = 5;
        for(int i = 1; i <= n; i++){
            for(int j = 1; j <= n - i + 1; j++){
                System.out.print(" ");
            }
            for(int j = 1; j <= i; j++){
                System.out.print(i + " ");
            }
            for(int j = 1; j <= n - i; j++){
                System.out.print("  ");
            }
            System.out.println();
        }
        */


        /* 
        
        Print the following pattern (Palindromic Number Pyramid)
            1
           212
          32123
         4321234
        543212345
        ==> height = 5 & width = 9 (numbers = 5)

        int n = 5;
        for(int i = 1; i <= n; i++){
            for(int j = 1; j <= n - i; j++){
                System.out.print("   ");
            }
            for(int j = i; j >= 1;  j--){
                System.out.print(" " + j + " ");
            }
            for(int j = 2; j <= i; j++){
                System.out.print(" " + j + " ");
            }
            System.out.println();
        }
         */
        

        /* 
        
        Print the following pattern (Butterfly Pattern)
        *      *
        **    **
        ***  ***
        ********
        ********
        ***  ***
        **    **
        *      *
        ==> height = 8 (stars(divided) = 4) & width = 8 (stars(divided) = 4)

        int n = 4;
        for(int i = 1; i <= n; i++){
            for(int j = 1; j <= i; j++){
                System.out.print("*");
            }
            int spaces = 2 * (n - i);
            for(int j = 1; j <= spaces; j++){
                System.out.print(" ");
            }
            for(int j = 1; j <= i; j++){
                System.out.print("*");
            }
            System.out.println();
        }
        for(int i = n; i >= 1; i--){
            for(int j = 1; j <= i; j++){
                System.out.print("*");
            }
            int spaces = 2 * (n - i);
            for(int j = 1; j <= spaces; j++){
                System.out.print(" ");
            }
            for(int j = 1; j <= i; j++){
                System.out.print("*");
            }
            System.out.println();
        }
         */


        /* 
        
        Print the following pattern (Hollow Rhombus)
            *****
           *   *
          *   *
         *   *
        *****
        ==> height = 5 & width = 9 (stars = 5)

        int n = 5;
        for(int i = 1; i <= n; i++){
            for(int j = 1; j <= n - i; j++){
                System.out.print(" ");
            }
            for(int j = 1; j <= n; j++){
                if(i == 1 || i == n || j == 1 || j == n){
                    System.out.print("*");
                } else {
                    System.out.print(" ");
                }
            }
            System.out.println();
        }
         */


        /* 
        
        Print the following pattern (Diamond Pattern)
           *
          ***
         *****
        *******
         *****
          ***
           *
        ==> height = 8 (one half = 4) & width = 7

        int n = 4;
        for(int i = 1; i <= n; i++){
           for(int j = 1; j <= n - i; j++){
               System.out.print(" ");
           }
           int stars = 2 * i - 1;
           for(int j = 1; j <= stars; j++){
               System.out.print("*");
           }
           for(int j = 1; j <= n - i; j++){
               System.out.print(" ");
           }
           System.out.println();
        }
        for(int i = n - 1; i >= 1; i--){
           for(int j = 1; j <= n - i; j++){
               System.out.print(" ");
           }
           int stars = 2 * i - 1;
           for(int j = 1; j <= stars; j++){
               System.out.print("*");
           }
           for(int j = 1; j <= n - i; j++){
               System.out.print(" ");
           }
           System.out.println();
        }
         */


    }
}