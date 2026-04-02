package models;

public class Appointment {
    private String patientName;
    private String doctorName;
    private String date;

    public Appointment(String patientName, String doctorName, String date) {
        this.patientName = patientName;
        this.doctorName = doctorName;
        this.date = date;
    }

    public Appointment(String patientName, String appointmentDate) {
        throw new UnsupportedOperationException("Not supported yet.");
    }

    @Override
    public String toString() {
        return "Appointment{patient='" + patientName + "', doctor='" + doctorName + "', date='" + date + "'}";
    }
}