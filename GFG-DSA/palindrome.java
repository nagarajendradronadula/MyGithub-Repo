public class palindrome{
    public static boolean palindromeFunc(int n){
        int rev = 0;
        int temp = n;

        while(temp != 0){
            int lastDigit = temp % 10;
            rev = rev * 10 + lastDigit;
            temp = temp / 10;
        }

        return rev == n;
    }

    public static void main(String[] args){
        System.out.println(palindromeFunc(363));
        System.out.println(palindromeFunc(365));
        System.out.println(palindromeFunc(7654567));
    }
}