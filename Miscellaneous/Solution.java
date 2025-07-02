import java.util.Scanner;

public class Solution {
    public static int solution(String s) {
        int n = s.length();
        if (n < 2) return 0;

        int[] leftX = new int[n + 1];
        int[] rightO = new int[n + 1];

        // Count cumulative 'x' from left
        for (int i = 0; i < n; i++) {
            leftX[i + 1] = leftX[i] + (s.charAt(i) == 'x' ? 1 : 0);
        }

        // Count cumulative 'o' from right
        for (int i = n - 1; i >= 0; i--) {
            rightO[i] = rightO[i + 1] + (s.charAt(i) == 'o' ? 1 : 0);
        }

        int maxScore = 0;

        // Try every possible cut and calculate max score
        for (int i = 1; i < n; i++) {
            int score = leftX[i] + rightO[i];
            maxScore = Math.max(maxScore, score);
        }

        return maxScore;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String s = sc.nextLine(); // input string like "xoooxo"
        int result = solution(s);
        System.out.println(result);
        sc.close();
    }
}