// import email_administration_using_java.email;  // This should match the package of email.java
// import java.util.*;
// import Projects.CompletedProjects.email administration using java.email;


// public class emailadmin {
//     public static void main(String[] args){
//         // email em1 = new email("John", "Smith");
//         System.out.println("Enter your First Name and Last Name");
//         Scanner sc = new Scanner(System.in);
//         email em1 = new email(sc.nextLine(), sc.nextLine());
//         System.out.println("Enter your alternate email");
//         String alternateEmail = sc.nextLine();

//         em1.setAlternateEmail(alternateEmail);

//         clearConsole();
//         // em1.setAlternateEmail("your alternate email is: dnr@gmail.com");
//         // System.out.println(em1.getAlternateEmail());

//         System.out.println(em1.showInfo());
//     }

//     // Method to clear the console
//     @SuppressWarnings("deprecation")
//     public static void clearConsole() {
//         try {
//             final String os = System.getProperty("os.name");
//             if (os.contains("Windows")) {
//                 new ProcessBuilder("cmd", "/c", "cls").inheritIO().start().waitFor();
//             } else {
//                 Runtime.getRuntime().exec("clear");
//             }
//         } catch (final Exception e) {
//             System.out.println("Error in clearing the console: " + e.getMessage());
//         }
//     }
// }

package email_administration_using_java.email;

import java.util.Scanner;

public class emailadmin {
    public static void main(String[] args) {
        System.out.println("Enter your First Name and Last Name:");
        Scanner sc = new Scanner(System.in);
        String firstName = sc.nextLine();
        String lastName = sc.nextLine();

        // Create an email object
        email em1 = new email(firstName, lastName);

        // Set alternate email
        System.out.println("Enter your alternate email:");
        String alternateEmail = sc.nextLine();
        em1.setAlternateEmail(alternateEmail);

        // Clear console
        clearConsole();

        // Display user information
        System.out.println(em1.showInfo());
    }

    // Method to clear the console
    @SuppressWarnings("deprecation")
    public static void clearConsole() {
        try {
            final String os = System.getProperty("os.name");
            if (os.contains("Windows")) {
                new ProcessBuilder("cmd", "/c", "cls").inheritIO().start().waitFor();
            } else {
                Runtime.getRuntime().exec("clear");
            }
        } catch (final Exception e) {
            System.out.println("Error in clearing the console: " + e.getMessage());
        }
    }
}