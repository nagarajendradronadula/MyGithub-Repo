package java;
import java.util.*;

public class graph {
    static class Edge{
        int src;
        int dest;
        // int wt;

        public Edge(int s, int d){//addint w when using weight for edges
            this.src = s;
            this.dest = d;
            // this.wt = w;
        }
    }

    public static void createGraph(ArrayList<Edge> graph[]){
        for(int i =0; i<graph.length; i++){
            graph[i] = new ArrayList<Edge>();
        }//this loop creates an empty arraylist 

        // graph[0].add(new Edge(0,2,2));
        
        // graph[1].add(new Edge(1,2,10));
        // graph[1].add(new Edge(1,3,0));

        // graph[2].add(new Edge(2,0,2));
        // graph[2].add(new Edge(2,1,10));
        // graph[2].add(new Edge(2,3,-1));

        // graph[3].add(new Edge(3,1,0));
        // graph[3].add(new Edge(3,2,-1));

        graph[0].add(new Edge(0,1));
        graph[0].add(new Edge(0,2));
        
        graph[1].add(new Edge(1,0));
        graph[1].add(new Edge(1,3));

        graph[2].add(new Edge(2,0));
        graph[2].add(new Edge(2,4));

        graph[3].add(new Edge(3,1));
        graph[3].add(new Edge(3,4));
        graph[3].add(new Edge(3,5));

        graph[4].add(new Edge(4,2));
        graph[4].add(new Edge(4,3));
        graph[4].add(new Edge(4,5));

        graph[5].add(new Edge(5,3));
        graph[5].add(new Edge(5,4));
        graph[5].add(new Edge(5,6));

        graph[6].add(new Edge(6,5));

    }

    public static void bfs(ArrayList<Edge> graph[], int V){
        Queue<Integer> q= new LinkedList<>();
        boolean vis[] = new boolean[V];
        q.add(0);

        while(!q.isEmpty()){
            int curr = q.remove();
            if(vis[curr] == false){
                System.out.print(curr+" ");
                vis[curr] = true;

                for(int i=0; i<graph[curr].size(); i++){
                    Edge e = graph[curr].get(i);
                    q.add(e.dest);
                }
            }
        }
    }

    public static void main(String []args){
        int V = 7;

        ArrayList<Edge> graph[] = new ArrayList[V];
        createGraph(graph);

        bfs(graph, V);
        //print 2's neighbours
        for(int i=0; i<graph[2].size(); i++){
            Edge e = graph[2].get(i);
            // System.out.println(e.dest+" , "+e.wt);
            System.out.println();
        }
    }
}