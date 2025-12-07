public class factorial{
    // Method - 1 (recursive)
    public static int factorialFunc(int n){
        if(n == 0){
            return 1;
        }

        return n * factorialFunc(n-1);
    }

    // Method - 2 (loop)
    public static int factorialFunc2(int n){
        int result = 1;
        for(int i = 1; i <= n; i++){
            result *= i;
        }
        return result;
    }

    public static void main(String[] args){
        System.out.println(factorialFunc2(5));
        System.out.println(factorialFunc2(0));
        System.out.println(factorialFunc2(1));
        System.out.println(factorialFunc2(10));
    }
}