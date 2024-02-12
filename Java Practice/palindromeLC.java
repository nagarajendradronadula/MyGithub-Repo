package java;
import java.util.*;

class palindromeLC {
    public boolean isPalindrome(int x) {
        Scanner sc = new Scanner(System.in);
        x = sc.nextInt();

        for(int i = 0; i < x; i--){
            int y = i;
            if(x == y)
                System.out.println("true");
            else
                System.out.println("false");
        }
    }
}