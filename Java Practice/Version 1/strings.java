package java;
import java.util.*;
public class strings {
    public static void main(String[] args) {
        StringBuilder sb = new StringBuilder("Tony");
        System.out.println(sb);

        //char at index 0
        System.out.println(sb.charAt(0));

        //set char at index 0
        sb.setCharAt(0, 'P');
        System.out.println(sb);

        //insert a letter to the word
        sb.insert(0,'S');
        System.out.println(sb);

        //delete a character
        sb.delete(0,1);
        System.out.println(sb);

        //appending or adding a chaarcter to the word
        sb.append("s");
        sb.append("t");
        sb.append("a");
        sb.append("r");
        sb.append("k");
        System.out.println(sb);

        //strings length
        System.out.println(sb.length());

    }
}
