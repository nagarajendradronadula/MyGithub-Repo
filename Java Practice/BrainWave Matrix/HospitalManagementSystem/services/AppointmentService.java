package services;

import java.util.ArrayList;
import java.util.List;
import models.Appointment;
import java.util.Scanner;

public class AppointmentService {
    private final ArrayList<Appointment> appointments = new ArrayList<>();

    // public void addAppointment(InputHelper input) {
    //     String patientName = input.readString("Enter patient name: ");
    //     String doctorName = input.readString("Enter doctor name: ");
    //     String date = input.readString("Enter appointment date: ");
    //     appointments.add(new Appointment(patientName, doctorName, date));
    //     System.out.println("Appointment added.");
    // }

    public void addAppointment() {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter patient name: ");
        String patientName = scanner.nextLine();
        System.out.print("Enter appointment date: ");
        String appointmentDate = scanner.nextLine();
        Appointment appointment = new Appointment(patientName, appointmentDate);
        appointments.add(appointment);
    }

    public List<Appointment> getAllAppointments() {
        throw new UnsupportedOperationException("Not supported yet.");
    }
}