package services;

import models.Patient;
import utils.InputHelper;

import java.util.ArrayList;

public class PatientService {
    private final ArrayList<Patient> patients = new ArrayList<>();

    public PatientService() {
        // Sample patients
        patients.add(new Patient("John Doe", 35, "Heart Disease"));
        patients.add(new Patient("Jane Smith", 28, "Migraine"));
    }

    public void registerPatient(InputHelper input) {
        String name = input.readString("Enter patient name: ");
        int age = input.readInt("Enter age: ");
        String illness = input.readString("Enter illness: ");
        patients.add(new Patient(name, age, illness));
        System.out.println("Patient registered!");
    }

    public void listPatients() {
        if (patients.isEmpty()) {
            System.out.println("No patients registered.");
            return;
        }

        System.out.println("\n--- Registered Patients ---");
        for (Patient p : patients) {
            System.out.println(p);
        }
    }
}