public class trailingZeroesFactorial{
    public static int trailingZeroesFactorialFunc(int n){
        int fact = 1;
        for(int i = 1; i <= n; i++){
            fact *= i;
        }

        int count  = 0;
        while(fact % 10 == 0){
            count++;
            fact /= 10;
        }
        return count;
    }

    public static void main(String[] args){
        System.out.println(trailingZeroesFactorialFunc(5));
        System.out.println(trailingZeroesFactorialFunc(1));
        System.out.println(trailingZeroesFactorialFunc(0));
        System.out.println(trailingZeroesFactorialFunc(10));
    }
}