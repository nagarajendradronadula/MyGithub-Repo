import java.util.Scanner;

public class numberToWords {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter a number: ");
        int num = sc.nextInt();
        String result = convertToWords(num);
        System.out.println(result);
        sc.close();
    }

    public static String convertToWords(int num) {
        if (num == 0) {
            return "zero";
        }

        String[] units = { "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine" };
        String[] teens = { "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen" };
        String[] tens = { "zero", "ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety" };        
        String result = "";

        if (num > 999) {    
            result = convertToWords(num / 1000) + " thousand " + convertToWords(num % 1000);
        } else if (num > 99) {
            result = units[num / 100] + " hundred " + convertToWords(num % 100);
        } else if (num > 19) {
            result = tens[num / 10] + " " + units[num % 10];
        } else if (num > 9) {
            result = teens[num - 10];
        } else if (num > 0) {
            result = units[num];
        } else {            
            result = units[num];
        }

        return result;
    }
}
