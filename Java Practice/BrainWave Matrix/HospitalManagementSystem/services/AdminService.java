package services;

import utils.InputHelper;

public class AdminService {
    private final String ADMIN_USERNAME = "admin";
    private final String ADMIN_PASSWORD = "admin123";

    private final PatientService patientService;
    private final StaffService staffService;
    private final InputHelper input;

    public AdminService(PatientService patientService, StaffService staffService, InputHelper input) {
        this.patientService = patientService;
        this.staffService = staffService;
        this.input = input;
    }

    public void adminMenu() {
        System.out.println("\n=== Admin Login ===");
        String username = input.readString("Username: ");
        String password = input.readString("Password: ");

        if (username.equals(ADMIN_USERNAME) && password.equals(ADMIN_PASSWORD)) {
            System.out.println("Login successful.");
            boolean loggedIn = true;
            while (loggedIn) {
                System.out.println("\n--- Admin Panel ---");
                System.out.println("1. Add Doctor");
                System.out.println("2. View Patients");
                System.out.println("3. View Doctors");
                System.out.println("4. Logout");

                int choice = input.readInt("Choose an option: ");

                switch (choice) {
                    case 1 -> staffService.registerDoctor(input);
                    case 2 -> patientService.listPatients();
                    case 3 -> staffService.listDoctors();
                    case 4 -> loggedIn = false;
                    default -> System.out.println("Invalid choice.");
                }
            }
        } else {
            System.out.println("Invalid credentials!");
        }
    }
}