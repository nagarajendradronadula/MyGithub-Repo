package java;
import java.util.HashSet;
import java.util.Iterator;
public class hashset {
    public static void main(String []args){
        //creating
        HashSet<Integer> set = new HashSet<>();
        //ArrayList<Integer> list = new ArrayList<>();

        //Insert
        set.add(1);
        set.add(2);
        set.add(3);
        set.add(1);

        //search = contains
        // if(set.contains(1)){
        //     System.out.println("Set contains 1");
        // }
        // if(!set.contains(6)){
        //     System.out.println("Does not contain 6");
        // }

        //delete
        // set.remove(1);
        // if(!set.contains(1)){
        //     System.out.println("does not contain");
        // }

        //size of set
        System.out.println("size of set is "+ set.size());

        //print all elements
        System.out.println(set);

        //iterator
        Iterator it = set.iterator();
        
        while(it.hasNext()){
            System.out.println(it.next());
        }
    }
}
