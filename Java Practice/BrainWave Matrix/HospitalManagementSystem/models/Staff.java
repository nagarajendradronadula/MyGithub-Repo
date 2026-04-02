package models;

public class Staff {
    private String name;
    private String role;
    private String specialization;

    public Staff(String name, String role, String specialization) {
        this.name = name;
        this.role = role;
        this.specialization = specialization;
    }

    public String getName() {
        return name;
    }

    public String getRole() {
        return role;
    }

    public String getSpecialization() {
        return specialization;
    }

    @Override
    public String toString() {
        return "Staff{name='" + name + "', role='" + role + "', specialization='" + specialization + "'}";
    }
}