package services;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;
import models.MedicalRecord;

public class EHRService {
    private final ArrayList<MedicalRecord> records = new ArrayList<>();

    // public void addMedicalRecord(InputHelper input) {
    //     String patientName = input.readString("Enter patient name: ");
    //     String diagnosis = input.readString("Enter diagnosis: ");
    //     String treatment = input.readString("Enter treatment: ");
    //     records.add(new MedicalRecord(patientName, diagnosis, treatment));
    //     System.out.println("Medical record added.");
    // }

    public void addMedicalRecord() {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter patient name: ");
        String patientName = scanner.nextLine();
        System.out.print("Enter medical record details: ");
        String medicalRecordDetails = scanner.nextLine();
        MedicalRecord medicalRecord = new MedicalRecord(patientName, medicalRecordDetails);
        records.add(medicalRecord);
    }

    public List<MedicalRecord> getAllMedicalRecords() {
        throw new UnsupportedOperationException("Not supported yet.");
    }

    public ArrayList<MedicalRecord> getRecords() {
        return records;
    }
}