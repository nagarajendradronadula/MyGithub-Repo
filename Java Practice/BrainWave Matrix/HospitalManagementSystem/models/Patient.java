package models;

public class Patient {
    private String name;
    private int age;
    private String illness;

    public Patient(String name, int age, String illness) {
        this.name = name;
        this.age = age;
        this.illness = illness;
    }

    @Override
    public String toString() {
        return "Patient{name='" + name + "', age=" + age + ", illness='" + illness + "'}";
    }
}