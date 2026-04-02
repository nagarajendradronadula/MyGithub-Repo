
import models.*;
import services.*;
import utils.InputHelper;

// public class Main {
//     public static void main(String[] args) {
//         InputHelper input = new InputHelper();
//         PatientService patientService = new PatientService();
//         StaffService staffService = new StaffService();
//         AppointmentService appointmentService = new AppointmentService();
//         EHRService ehrService = new EHRService();
//         BillingService billingService = new BillingService();
//         InventoryService inventoryService = new InventoryService();
//         AdminService adminService = new AdminService(patientService, staffService, input);
//         while (true) {
//             System.out.println("\n=== Hospital Management System ===");
//             System.out.println("1. Register Patient");
//             System.out.println("2. Admin Login");
//             System.out.println("3. Add Appointment");
//             System.out.println("4. Add Medical Record");
//             System.out.println("5. Generate Bill");
//             System.out.println("6. Add Inventory Item");
//             System.out.println("7. Exit");
//             int choice = input.readInt("Choose an option: ");
//             switch (choice) {
//                 case 1 -> patientService.registerPatient(input);
//                 case 2 -> adminService.adminMenu();
//                 case 3 -> appointmentService.addAppointment(input);
//                 case 4 -> ehrService.addMedicalRecord(input);
//                 case 5 -> billingService.generateBill(input);
//                 case 6 -> inventoryService.addInventoryItem(input);
//                 case 7 -> {
//                     System.out.println("Exiting...");
//                     return;
//                 }
//                 default -> System.out.println("Invalid option.");
//             }
//         }
//     }
// }
// Main.java

public static void main(String[] args) {
    InputHelper input = new InputHelper();
    PatientService patientService = new PatientService();
    StaffService staffService = new StaffService();
    AppointmentService appointmentService = new AppointmentService();
    EHRService ehrService = new EHRService();
    BillingService billingService = new BillingService();
    InventoryService inventoryService = new InventoryService();
    AdminService adminService = new AdminService(patientService, staffService, input);
    
    Scanner scanner = new Scanner(System.in);
    
    while (true) {
        System.out.println("Menu:");
        System.out.println("1. Appointments");
        System.out.println("2. Medical Records");
        System.out.println("3. Bills");
        System.out.println("4. Inventory Items");
        System.out.println("5. Exit");
        
        System.out.print("Enter your choice: ");
        int choice = scanner.nextInt();
        
        switch (choice) {
            case 1 -> appointmentMenu(appointmentService, scanner);
            case 2 -> medicalRecordMenu(ehrService, scanner);
            case 3 -> billMenu(billingService, scanner);
            case 4 -> inventoryMenu(inventoryService, scanner);
            case 5 -> adminService.adminMenu();
            case 6 -> {
System.out.println("Exiting...");
return;
            }
            default -> System.out.println("Invalid choice. Please try again.");
        }
    }
}

private static void appointmentMenu(AppointmentService appointmentService, Scanner scanner) {
    while (true) {
        System.out.println("Appointments Menu:");
        System.out.println("1. Add Appointment");
        System.out.println("2. View All Appointments");
        System.out.println("3. Back");
        
        System.out.print("Enter your choice: ");
        int choice = scanner.nextInt();
        
        switch (choice) {
            case 1 -> appointmentService.addAppointment();
            case 2 -> {
List<Appointment> appointments = appointmentService.getAllAppointments();
System.out.println("Appointments:");
for (Appointment appointment : appointments) {
System.out.println(appointment);
}
            }
            case 3 -> {
return;
            }
            default -> System.out.println("Invalid choice. Please try again.");
        }
    }
}

private static void medicalRecordMenu(EHRService ehrService, Scanner scanner) {
    while (true) {
        System.out.println("Medical Records Menu:");
        System.out.println("1. Add Medical Record");
        System.out.println("2. View All Medical Records");
        System.out.println("3. Back");
        
        System.out.print("Enter your choice: ");
        int choice = scanner.nextInt();
        
        switch (choice) {
            case 1 -> ehrService.addMedicalRecord();
            case 2 -> {
List<MedicalRecord> medicalRecords = ehrService.getAllMedicalRecords();
System.out.println("Medical Records:");
for (MedicalRecord medicalRecord : medicalRecords) {
System.out.println(medicalRecord);
}
            }
            case 3 -> {
return;
            }
            default -> System.out.println("Invalid choice. Please try again.");
        }
    }
}

private static void billMenu(BillingService billingService, Scanner scanner) {
    while (true) {
        System.out.println("Bills Menu:");
        System.out.println("1. Add Bill");
        System.out.println("2. View All Bills");
        System.out.println("3. Back");
        
        System.out.print("Enter your choice: ");
        int choice = scanner.nextInt();
        
        switch (choice) {
            case 1 -> billingService.addBill();
            case 2 -> {
List<Bill> bills = billingService.getAllBills();
System.out.println("Bills:");
for (Bill bill : bills) {
System.out.println(bill);
}
            }
            case 3 -> {
return;
            }
            default -> System.out.println("Invalid choice. Please try again.");
        }
    }
}

private static void inventoryMenu(InventoryService inventoryService, Scanner scanner) {
    while (true) {
        System.out.println("Inventory Items Menu:");
        System.out.println("1. Add Inventory Item");
        System.out.println("2. View All Inventory Items");
        System.out.println("3. Back");
        
        System.out.print("Enter your choice: ");
        int choice = scanner.nextInt();
        
        switch (choice) {
            case 1 -> inventoryService.addInventoryItem();
            case 2 -> {
List<InventoryItem> inventoryItems = inventoryService.getAllInventoryItems();
System.out.println("Inventory Items:");
for (InventoryItem inventoryItem : inventoryItems) {
System.out.println(inventoryItem);
}
            }
            case 3 -> {
return;
            }
            default -> System.out.println("Invalid choice. Please try again.");
        }
    }
}
