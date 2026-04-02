package java;
import java.util.*;
public class stringreverse {
     public static void main(String[] args) {
        System.out.println("Enter");
        Scanner sc = new Scanner(System.in);
        String inp = sc.next();
        StringBuilder sb = new StringBuilder(inp);

        for(int i=0;i<sb.length()/2;i++){
            int front = i;
            int back = sb.length()-1-i;

            //selecting the value at that particular position
            char frontChar = sb.charAt(front);
            char backChar = sb.charAt(back);

            //swapping the values from their positions
            sb.setCharAt(front, backChar);
            sb.setCharAt(back, frontChar);
        }

        //printing the reverse output
        System.out.println(sb);
     }
}
