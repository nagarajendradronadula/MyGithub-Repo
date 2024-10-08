package java;
//queue using array
// public class queues{
//     static class Queue{
//         static int arr[];
//         static int size;
//         static int rear = -1;

//         Queue(int n){
//             arr = new int[n];
//             this.size = n;
//         }

//         public static boolean isEmpty(){
//             return rear == -1;
//         }

//         //enqueue
//         public static void add(int data){
//             if(rear == size-1){
//                 System.out.println("full queue");
//                 return;
//             }
//             rear++;
//             arr[rear] = data;
//         }

//         //dequeue
//         public static int remove(){
//             if(isEmpty()){
//                 System.out.println("empty queue");
//                 return -1;
//             }
//             int front = arr[0];
//             for(int i=0; i<rear; i++){
//                 arr[i] = arr[i+1];
//             }
//             rear--;
//             return front;
//         }

//         //peek
//         public static int peek(){
//             if(isEmpty()){
//                 System.out.println("empty queue");
//                 return -1;
//             }
            
//             return arr[0];
//         }
//     }

//     public static void main(String[] args) {
//         Queue q = new Queue(5);
//         q.add(1);
//         q.add(2);
//         q.add(3);

//         while(!q.isEmpty()){
//             System.out.println(q.peek());
//             q.remove();
//         }
//     }
// }


//circular queue using array
// public class queues{
//     static class Queue{
//         static int arr[];
//         static int size;
//         static int rear = -1;
//         static int front = -1;

//         Queue(int n){
//             arr = new int[n];
//             this.size = n;
//         }

//         public static boolean isEmpty(){
//             return rear == -1 && front == -1;
//         }

//         public static boolean isFull(){
//             return (rear+1)%size == front;
//         }

//         //enqueue
//         public static void add(int data){
//             if(isFull()){
//                 System.out.println("full queue");
//                 return;
//             }
//             if(front == -1){
//                 front = 0;
//             }
//             rear = (rear + 1)%size;
//             arr[rear] = data;
//         }

//         //dequeue
//         public static int remove(){
//             if(isEmpty()){
//                 System.out.println("empty queue");
//                 return -1;
//             }
//             int result = arr[front];
//             if(rear == front){
//                 rear = front = -1;
//             }else{
//                 front =(front + 1)%size;
//             }
//             return front;
//         }

//         //peek
//         public static int peek(){
//             if(isEmpty()){
//                 System.out.println("empty queue");
//                 return -1;
//             }
            
//             return arr[front];
//         }
//     }

//     public static void main(String[] args) {
//         Queue q = new Queue(6);
//         q.add(1);
//         q.add(2);
//         q.add(3);
//         q.add(4);
//         q.add(5);
//         System.out.println(q.remove());
//         q.add(6);
//         System.out.println(q.remove());
//         q.add(7);

//         while(!q.isEmpty()){
//             System.out.println(q.peek());
//             q.remove();
//         }
//     }
// }


//queue using linked list
// public class queues{
//     static class Node{
//         int data;
//         Node next;

//         Node(int data){
//             this.data = data;
//             next = null;
//         }
//     }
//     static class Queue{
//         static Node head = null;
//         static Node tail = null;

//         public static boolean isEmpty(){
//             return head == null && tail == null;
//         }

//         //enqueue
//         public static void add(int data){
//             Node newNode = new Node(data);
//             if(tail == null){
//                 tail = head = newNode;
//                 return;
//             }

//             tail.next = newNode;
//             tail = newNode;
//         }

//         //dequeue
//         public static int remove(){
//             if(isEmpty()){
//                 System.out.println("empty queue");
//                 return -1;
//             }
            
//             int front = head.data;
//             if(head == tail){
//                 tail = null;
//                 return front;
//             }
//             head = head.next;

//             return front;
//         }

//         //peek
//         public static int peek(){
//             if(isEmpty()){
//                 System.out.println("empty queue");
//                 return -1;
//             }
            
//             return head.data;
//         }
//     }

//     public static void main(String[] args) {
//         Queue q = new Queue();
//         q.add(1);
//         q.add(2);
//         q.add(3);
//         q.add(4);
//         q.add(5);

//         while(!q.isEmpty()){
//             System.out.println(q.peek());
//             q.remove();
//         }
//     }
// }


//collection frameworks for queue
import java.util.*;
public class queues{

    public static void main(String[] args) {
        // Queue q = new Queue();
        // Queue<Integer> q = new  LinkedList<>();
        Queue<Integer> q = new ArrayDeque<>();
        q.add(1);
        q.add(2);
        q.add(3);
        q.add(4);
        q.add(5);

        while(!q.isEmpty()){
            System.out.println(q.peek());
            q.remove();
        }
    }
}