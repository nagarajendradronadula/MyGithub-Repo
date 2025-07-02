package services;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;
import models.InventoryItem;

public class InventoryService {
    private final ArrayList<InventoryItem> items = new ArrayList<>();

    // public void addInventoryItem(InputHelper input) {
    //     String name = input.readString("Enter item name: ");
    //     int quantity = input.readInt("Enter quantity: ");
    //     items.add(new InventoryItem(name, quantity));
    //     System.out.println("Inventory item added.");
    // }

    public void addInventoryItem() {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter item name: ");
        String itemName = scanner.nextLine();
        System.out.print("Enter item quantity: ");
        int itemQuantity = scanner.nextInt();
        InventoryItem inventoryItem = new InventoryItem(itemName, itemQuantity);
        items.add(inventoryItem);
    }

    public List<InventoryItem> getAllInventoryItems() {
        throw new UnsupportedOperationException("Not supported yet.");
    }

    public ArrayList<InventoryItem> getItems() {
        return items;
    }
}