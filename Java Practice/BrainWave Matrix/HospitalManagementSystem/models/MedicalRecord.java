package models;

public class MedicalRecord {
    private String patientName;
    private String diagnosis;
    private String treatment;

    public MedicalRecord(String patientName, String diagnosis, String treatment) {
        this.patientName = patientName;
        this.diagnosis = diagnosis;
        this.treatment = treatment;
    }

    public MedicalRecord(String patientName, String medicalRecordDetails) {
        throw new UnsupportedOperationException("Not supported yet.");
    }

    @Override
    public String toString() {
        return "MedicalRecord{patient='" + patientName + "', diagnosis='" + diagnosis + "', treatment='" + treatment + "'}";
    }
}