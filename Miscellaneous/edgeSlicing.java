import java.util.Scanner;

public class edgeSlicing {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a word: ");
        String word = sc.next();

        for (int i = 1, j = word.length() - 1; i < j; i++, j--) {
            System.out.println(word.substring(i, j));
        }

        sc.close();
    }
}
