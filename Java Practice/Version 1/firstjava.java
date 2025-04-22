package java;
import java.util.*;

public class firstjava{
        public static void main(String[] args)
        {
            System.out.println("Enter your 2 numbers: ");
            Scanner sc = new Scanner(System.in);
            int a=sc.nextInt();
            int b=sc.nextInt();
            System.out.print("Enter your Operation: ");
            char op=sc.next().charAt(0);
            int ans;

            switch(op){
                case '+':
                ans=a+b;
                System.out.println("a + b = " + ans);
                break;
                case '-':
                ans=a-b;
                System.out.println("a - b = " + ans);
                break;
                case '*':
                ans=a*b;
                System.out.println("a * b =" + ans);
                break;
                case '/':
                ans=a/b;
                System.out.println("a / b = " + ans);
                break;
                case '%':
                ans=a%b;
                System.out.println("a % b = " + ans);
                break;
                default:
                System.out.println("Invalid Operation");
            }

    }
}