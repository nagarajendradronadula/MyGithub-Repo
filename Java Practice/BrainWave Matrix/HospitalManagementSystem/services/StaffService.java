package services;

import java.util.ArrayList;
import models.Staff;
import utils.InputHelper;

public class StaffService {
    private final ArrayList<Staff> staffList = new ArrayList<>();

    public StaffService() {
        // Sample doctors
        staffList.add(new Staff("Dr. Smith", "Doctor", "Cardiology"));
        staffList.add(new Staff("Dr. Alice", "Doctor", "Neurology"));
        staffList.add(new Staff("Dr. Bob", "Doctor", "General Physician"));
    }

    public void registerStaff(InputHelper input) {
        String name = input.readString("Enter staff name: ");
        String role = input.readString("Enter role: ");
        String specialization = input.readString("Enter specialization (if any): ");
        staffList.add(new Staff(name, role, specialization));
        System.out.println("Staff registered!");
    }

    public void registerDoctor(InputHelper input) {
        String name = input.readString("Enter doctor's name: ");
        String specialization = input.readString("Enter specialization (e.g., Cardiology, Neurology, General Physician): ");
        staffList.add(new Staff(name, "Doctor", specialization));
        System.out.println("Doctor added successfully.");
    }

    // public void listDoctors() {
    //     System.out.println("\n--- List of Doctors ---");
    //     for (Staff s : staffList) {
    //         if ("Doctor".equalsIgnoreCase(s.getName()) || "Doctor".equalsIgnoreCase(s.getName().split(" ")[0])) {
    //             System.out.println(s);
    //         }
    //     }
    // }
    public void listDoctors() {
        System.out.println("\n--- List of Doctors ---");
        for (Staff s : staffList) {
            if (s.getRole().equalsIgnoreCase("Doctor")) {
                System.out.println(s);
            }
        }
    }
}