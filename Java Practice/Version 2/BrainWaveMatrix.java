// Create a fully ATM Interface using Java

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Scanner;
import java.time.format.DateTimeFormatter;
import java.util.Map;

public class BrainWaveMatrix {

    public static float balance = 0;
    public static HashMap<String, String> transactionData = new HashMap<String, String>();

    // Get the current date and time
    public static LocalDateTime now = LocalDateTime.now();

    // Format the date and time into a single string
    public static DateTimeFormatter dateTimeFormatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm");
    public static String formattedTime = now.format(dateTimeFormatter);

    public static void main(String[] args) {
        intro();
    }

    public static void intro() {
        System.out.println("\n Welcome to the  Brain Wave Matrix ATM Interface");

        System.out.println("Select option: \n 1. Deposit \n 2. Withdraw \n 3. Check Balance \n 4. Transaction History \n 5. Exit");

        Scanner sc = new Scanner(System.in);
        int option = sc.nextInt();

        switch (option) {
            case 1:
                System.out.println("Selected 1. Deposit \n Enter amount to deposit");
                float depositAmt = sc.nextFloat();
                if (depositAmt < 1) {
                    System.out.println("Please enter valid amount");
                    depositAmt = sc.nextFloat();
                }
                String addedMoney = Float.toString(depositAmt);
                String intoData = "+" + addedMoney;
                System.out.println("Your have deposited is: " + deposit(depositAmt) + " to your account and now your current balance is " + checkBalance() + "💵");
                transactionData.put(intoData, formattedTime);
                break;
            case 2:
                System.out.println("Selected 2. Withdraw \n Enter amount to withdraw");
                float withdrawAmt = sc.nextFloat();
                if (withdrawAmt > balance || withdrawAmt < 0) {
                    System.out.println("You have entered invalid amount. Please check!");
                    withdrawAmt = sc.nextFloat();
                }
                System.out.println("You have withdrawn " + withdraw(withdrawAmt) + "from your balance and your current balance is " + checkBalance() + "💵");
                String takenMoney = Float.toString(withdrawAmt);
                String outData = "-" + takenMoney;
                transactionData.put(outData, formattedTime);
                break;
            case 3:
                System.out.println("Selected 3. Check Balance");
                System.out.println("Your current balance is: " + checkBalance() + "💵");
                break;
            case 4:
                System.out.println("Selected 4. Transactions");
                transactions();
                break;
            case 5:
                System.out.println("Selected 5. Exit");
                System.out.println("Thank you for using the Brain Wave Matrix ATM Interface \n Now you are exiting the interface");
                return;
            default:
                System.out.println("Invalid option");
        }
        intro();
    }

    public static float deposit(float depositAmt) {
        balance += depositAmt;
        return balance;
    }

    public static float withdraw(float withdrawAmt) {
        balance -= withdrawAmt;
        return balance;
    }

    public static float checkBalance() {
        return balance;
    }

    public static void transactions() {
        System.out.printf("%-15s %-20s%n", "Transaction", "DateTime");
        System.out.println("--------------------------------------");

        // Print the HashMap in a tabular format
        for (Map.Entry<String, String> entry : transactionData.entrySet()) {
            System.out.printf("%-15s %-20s%n", entry.getKey(), entry.getValue());
        }
    }
}


