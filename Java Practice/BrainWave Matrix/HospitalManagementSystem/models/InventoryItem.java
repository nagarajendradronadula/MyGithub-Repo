package models;

public class InventoryItem {
    private String name;
    private int quantity;

    public InventoryItem(String name, int quantity) {
        this.name = name;
        this.quantity = quantity;
    }

    @Override
    public String toString() {
        return "InventoryItem{name='" + name + "', quantity=" + quantity + "}";
    }
}