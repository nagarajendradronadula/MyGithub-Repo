// import email_administration_using_java.email;  // This should match the package of email.java
// import java.util.*;

// public class email {
//     private String firstName;
//     private String lastName;
//     private String password;
//     private int defaultPasswordLength = 10;
//     private String department;
//     private String email;
//     private String companySuffix = "company.com";
//     private int mailboxCapacity = 500;
//     private String alternateEmail;

//     //constructor to recieve the first name and last name
//     public email(String firstName, String lastName){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         // System.out.println("Email created: " + this.firstName + " " + this.lastName);

//         //call for method asking for the department - return the department
//         this.department = setDepartment();
//         // System.out.println("Department: " + this.department);

//         //call a method that returns a random password
//         this.password = randomPassword(defaultPasswordLength);
//         // System.out.println("Your password is: " + this.password);

//         //combine elements to generate email
//         email = firstName.toLowerCase() + "." + lastName.toLowerCase() + "@" + department + "." + companySuffix;
//         // System.out.println("Your email is: " + email);
//     }
//     //ask for the department
//     private String setDepartment(){

//         System.out.println("Department Code:\n1 for Sales\n2 for Development\n3 for Accounting\n0 for none\nEnter department code: ");
//         Scanner in = new Scanner(System.in);
//         int depChoice = in.nextInt();
//         if(depChoice == 1){
//             return "sales";
//         }else if(depChoice == 2){
//             return "dev";
//         }else if(depChoice == 3){
//             return "acct";
//         }else{
//             return "";
//         }
//     }

//     //generate a random password
//     private String randomPassword(int length){
//         String passwordSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%";
//         char[] password = new char[length];
//         for(int  i = 0; i  < length; i++){
//             int pass = (int) (Math.random() * passwordSet.length());
//             password[i] = passwordSet.charAt(pass);
//         }
//         return new String(password);
//     }

//     //set the mailbox capacity
//     public void setMailboxCapacity(int capacity){
//         this.mailboxCapacity = capacity;
//     }
//     //set the alternate email
//     public void setAlternateEmail(String altEmail){
//         this.alternateEmail = altEmail;
//     }
//     //change the password
//     public void changePassword(String password){
//         this.password = password;
//     }

//     public int getMailboxCapacity(){
//         return mailboxCapacity;
//     }
//     public String getAlternateEmail(){
//         return alternateEmail;
//     }
//     public String getPassword(){
//         return password;
//     }

//     public String showInfo(){
//         return "Name: " + firstName + " " + lastName
//                 + "\nCoampany email: " + email
//                 + "\nDepartment: " + department
//                 + "\nPassword: " + password
//                 + "\nMailbox capacity: " + mailboxCapacity + "mb"
//                 + "\nAlternate Email: " + alternateEmail;
//     }

//     // // Method to clear the console
//     // @SuppressWarnings("deprecation")
//     // public void clearConsole() {
//     //     try {
//     //         final String os = System.getProperty("os.name");
//     //         if (os.contains("Windows")) {
//     //             new ProcessBuilder("cmd", "/c", "cls").inheritIO().start().waitFor();
//     //         } else {
//     //             Runtime.getRuntime().exec("clear");
//     //         }
//     //     } catch (final Exception e) {
//     //         System.out.println("Error in clearing the console: " + e.getMessage());
//     //     }
//     // }
// }


package email_administration_using_java.email;

import java.util.Random;
import java.util.Scanner;

public class email {
    private String firstName;
    private String lastName;
    private String password;
    private int defaultPasswordLength = 10; 
    private String department;
    private String email;
    private String companySuffix = "company.com";
    private int mailboxCapacity = 500;
    private String alternateEmail;

    // Constructor to receive the first name and last name
    public email(String firstName, String lastName) {
        this.firstName = firstName;
        this.lastName = lastName;

        // Call a method asking for the department - return the department
        this.department = setDepartment();

        // Call a method that returns a random password
        this.password = randomPassword(defaultPasswordLength);

        // Combine elements to generate the email
        email = String.format("%s.%s@%s.%s", firstName.toLowerCase(), lastName.toLowerCase(), department, companySuffix);
    }

    // Ask for the department
    private String setDepartment() {
        System.out.println("Department Code:\n1 for Sales\n2 for Development\n3 for Accounting\n0 for none\nEnter department code: ");
        Scanner in = new Scanner(System.in);
        int depChoice = in.nextInt();
        switch (depChoice) {
            case 1:
                return "sales";
            case 2:
                return "dev";
            case 3:
                return "acct";
            default:
                return "";
        }
    }

    // Generate a random password
    private String randomPassword(int length) {
        String passwordSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%";
        StringBuilder password = new StringBuilder(length);
        Random rand = new Random();
        for (int i = 0; i < length; i++) {
            password.append(passwordSet.charAt(rand.nextInt(passwordSet.length())));
        }
        return password.toString();
    }

    // Set mailbox capacity
    public void setMailboxCapacity(int capacity) {
        this.mailboxCapacity = capacity;
    }

    // Set the alternate email
    public void setAlternateEmail(String altEmail) {
        this.alternateEmail = altEmail;
    }

    // Change the password
    public void changePassword(String password) {
        this.password = password;
    }

    // Getters
    public int getMailboxCapacity() {
        return mailboxCapacity;
    }

    public String getAlternateEmail() {
        return alternateEmail;
    }

    public String getPassword() {
        return password;
    }

    // Show information
    public String showInfo() {
        return String.format("Name: %s %s\nCompany email: %s\nDepartment: %s\nPassword: %s\nMailbox capacity: %dmb\nAlternate Email: %s",
                firstName, lastName, email, department, password, mailboxCapacity, alternateEmail);
    }
}