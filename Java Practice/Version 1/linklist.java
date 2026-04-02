package java;
import java.util.*;
//all the commented out code is linked list from scratch
public class linklist {
    // Node head;
    // private int size;

    // linklist(){
    //     this.size = 0;
    // }
    // class Node{
    //     String data;
    //     Node next;

    //     Node(String data){
    //         this.data = data;
    //         this.next = null;
    //         size++;
    //     }
    // }

    // //add - first
    // public void addFirst(String data){
    //     Node newNode = new Node(data);
    //     if(head == null){
    //         head = newNode;
    //         return;
    //     }

    //     newNode.next = head;
    //     head = newNode;
    // }
    
    // //adding at last
    // public void addLast(String data){
    //     Node newNode = new Node(data);
    //     if(head == null){
    //         head = newNode;
    //         return;
    //     }

    //     Node currNode = head;
    //     while(currNode.next != null){
    //         currNode = currNode.next;
    //     }

    //     currNode.next = newNode;
    // }

    // //print
    // public void printList(){
    //     if(head == null){
    //         System.out.println("list is empty");
    //         return;
    //     }
    //     Node currNode = head;
    //     while(currNode!= null){
    //         System.out.print(currNode.data + " -> ");
    //         currNode = currNode.next;
    //     }
        
    //     System.out.println("NULL");
    // }

    // //delete first
    // public void deleteFirst(){
    //     if(head == null){
    //         System.out.println("This list is empty");
    //         return;
    //     }
    //     size--;
    //     head = head.next;
    // }

    // //delete last
    // public void deleteLast(){
    //     if(head == null){
    //         System.out.println("This list is empty");
    //         return;
    //     }
    //     size--;

    //     if(head.next == null){
    //         head = null;
    //         return;
    //     }

    //     Node secondLast = head;
    //     Node lastNode = head.next; 
    //     while(lastNode.next != null){
    //         lastNode = lastNode.next;
    //         secondLast = secondLast.next;
    //     }

    //     secondLast.next = null;
    // }

    // public int getSize(){
    //     return size;
    // }
    public static void main(String[] args) {
        // linklist list = new linklist();
        // list.addFirst("a");
        // list.addFirst("is"); 
        // list.printList();

        // list.addLast("list");
        // list.addFirst("this");
        // list.printList();
        
        // list.deleteFirst();
        // list.printList();

        // list.deleteLast();
        // list.printList();

        // System.out.println(list.getSize());

        LinkedList<String> list = new LinkedList<String>();//to create a list using collection frameworks
        list.addFirst("a");//to add an element or data or node
        list.addFirst("is");
        System.out.println(list);//to print a list

        list.addLast("list");
        System.out.println(list);

        list.add("this");
        System.out.println(list);
        System.out.println(list.size());//to print size

        for(int i=0 ; i<list.size(); i++){
            // if(list.get(i) == anyvalue)  //to search any element
            System.out.print(list.get(i) + " -> ");//to print each element
        }
        System.out.print("null");

        list.remove(3);//to delete an element at a particular position
        System.out.println(list);

        list.removeFirst();//to delete first element
        System.out.println(list);

        list.removeLast();//to delete last element
        System.out.println(list);
    }
}
