package models;

public class Bill {
    private String patientName;
    private double amount;

    public Bill(String patientName, double amount) {
        this.patientName = patientName;
        this.amount = amount;
    }

    @Override
    public String toString() {
        return "Bill{patient='" + patientName + "', amount=" + amount + "}";
    }
}