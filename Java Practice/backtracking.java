package java;
import java.util.ArrayList;
import java.util.List;

public class backtracking {

    //arranging 3 letters A,B,C and find all solutions
    // public static void printPermutation(String str, String perm, int idx){
    //     if(str.length() == 0){
    //         System.out.println(perm);
    //         return;
    //     }
    //     for(int i = 0; i < str.length(); i++){
    //         char currChar = str.charAt(i);
    //         String newStr = str.substring(0, i) + str.substring(i + 1);
    //         printPermutation(newStr, perm + currChar, idx + 1);
    //     }
    // }

    // public static void main(String []args){
    //     String str = "ABC";
    //     printPermutation(str, "", 0);
    // }

    //print all solutions where queens are safe in N*N chessboar and N queens.(N queens Problem)
//         public boolean isSafe(int row, int col, char[][] board){

//             //horizontal
//             for(int j=0; j < board.length; j++){
//                 if(board[row][j] == "Q"){
//                     return false;
//                 }
//             }
//         }

//         //vertical
//         for(int i = 0; i < board.length; i++){
//             if(board[i][col] == "Q"){
//                 return false;
//             }
//         }

//         //upper left
//         int r = row;
//         for(int c = col; c >= 0 && r >= 0; c--,r--){
//             if(board[r][c] == "Q"){
//                 return false;
//             }
//         }

//         //upper right
//         r = row;
//         for(int c = col; c < board.length && r >= 0; r--,c++){
//             if(board[r][c] == "Q"){
//                 return false;
//             }
//         }

//         //lower left
//         r = row;
//         for(int c = col; c >= 0 && r < board.length; r++, c--){
//             if(board[r][c] == "Q"){
//                 return false;
//             }
//         }

//         //lower right
//         for(int c = col; c < board.length && r < board.length; c++,r++){
//             if(board[r][c] == "Q"){
//                 return false;
//             }
//         }

//         return true;
// }

// public void saveBoard(char[][] board, List<List<String>> allBoards){
//     String row = "";
//     List<String> newBoard = new ArrayList<>();
    
//     for(int i = 0; i < board.length; i++){
//         row = "";

//         for(int j = 0; j < board[0].length; j++){
//         if(board[i][j] == "Q")
//         row += "Q";
//         else
//         row +="[]";
//         }

//     allBoards.add(row);
//     }
// allBoards.add(newBoard);
// }

// public void helper(char[][] board, List<List<String>> allBoards, int col){
//     if(col == board.length){
//         saveBoard(board, allBoards);
//         return;
//     }

//     for(int row = 0; row < board.length; row++){
//         if(isSafe(row, col, board)){
//             board[row][col] = "Q";
//             helper(board, allBoards, col+1);
//             board[row][col] = ".";
//         }
//     }
// }

// public List<List<String>> solveNQueens(int n){
//     List<List<Strings>> allBoards = new ArrayList<>();
//     char[][] board = new char[n][n];

//     helper(board, allBoards,0);
//     return allBoards;
// }

//same question but this one by chatGPT
public class Backtracking {
    public static void main(String[] args) {
        int n = 8; // Change this to the desired board size
        List<List<String>> solutions = backtracking.solveNQueens(n);

        for (List<String> solution : solutions) {
            for (String row : solution) {
                System.out.println(row);
            }
            System.out.println();
        }
    }
    
public boolean isSafe(int row, int col, char[][] board) {
    // Horizontal
    for (int j = 0; j < board.length; j++) {
        if (board[row][j] == 'Q') {
            return false;
        }
    }

    // Vertical
    for (int i = 0; i < board.length; i++) {
        if (board[i][col] == 'Q') {
            return false;
        }
    }

    // Upper left
    int r = row;
    for (int c = col; c >= 0 && r >= 0; c--, r--) {
        if (board[r][c] == 'Q') {
            return false;
        }
    }

    // Upper right
    r = row;
    for (int c = col; c < board.length && r >= 0; r--, c++) {
        if (board[r][c] == 'Q') {
            return false;
        }
    }

    // Lower left
    r = row;
    for (int c = col; c >= 0 && r < board.length; r++, c--) {
        if (board[r][c] == 'Q') {
            return false;
        }
    }

    // Lower right
    r = row;
    for (int c = col; c < board.length && r < board.length; c++, r++) {
        if (board[r][c] == 'Q') {
            return false;
        }
    }

    return true;
}

public void saveBoard(char[][] board, List<List<String>> allBoards) {
    List<String> newBoard = new ArrayList<>();

    for (int i = 0; i < board.length; i++) {
        StringBuilder row = new StringBuilder();

        for (int j = 0; j < board[0].length; j++) {
            if (board[i][j] == 'Q') {
                row.append('Q');
            } else {
                row.append('.');
            }
        }

        newBoard.add(row.toString());
    }

    allBoards.add(newBoard);
}

public void helper(char[][] board, List<List<String>> allBoards, int col) {
    if (col == board.length) {
        saveBoard(board, allBoards);
        return;
    }

    for (int row = 0; row < board.length; row++) {
        if (isSafe(row, col, board)) {
            board[row][col] = 'Q';
            helper(board, allBoards, col + 1);
            board[row][col] = '.'; // Backtrack
        }
    }
}

public List<List<String>> solveNQueens(int n) {
    List<List<String>> allBoards = new ArrayList<>();
    char[][] board = new char[n][n];

    helper(board, allBoards, 0);
    return allBoards;
}
}
}

