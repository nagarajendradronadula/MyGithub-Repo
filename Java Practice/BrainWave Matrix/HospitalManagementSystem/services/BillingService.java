package services;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;
import models.Bill;

public class BillingService {
    private final ArrayList<Bill> bills = new ArrayList<>();

    // public void generateBill(InputHelper input) {
    //     String patientName = input.readString("Enter patient name: ");
    //     double amount = input.readDouble("Enter amount: ");
    //     bills.add(new Bill(patientName, amount));
    //     System.out.println("Bill generated.");
    // }

    public void addBill() {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter patient name: ");
        String patientName = scanner.nextLine();
        System.out.print("Enter bill amount: ");
        double billAmount = scanner.nextDouble();
        Bill bill = new Bill(patientName, billAmount);
        bills.add(bill);
    }

    public List<Bill> getAllBills() {
        throw new UnsupportedOperationException("Not supported yet.");
    }

    public ArrayList<Bill> getBills() {
        return bills;
    }
}