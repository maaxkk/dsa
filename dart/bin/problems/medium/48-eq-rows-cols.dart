// Given a 0-indexed n x n integer matrix grid, return the number of pairs (ri, cj) such that row ri and column cj are equal.
//
// A row and column pair is considered equal if they contain the same elements in the same order (i.e., an equal array).
//
//
//
// Example 1:
//
// Input: grid = [[3,2,1],[1,7,6],[2,7,7]]
// Output: 1
// Explanation: There is 1 equal row and column pair:
// - (Row 2, Column 1): [2,7,7]

// Algos
// 1) Make hashmap for columns in rows
// 2) iterate through array and columns and rows to hashmaps
// 3) Then iterate through keys in rows hashmap and check if this key exists in columns hashmap, if yes
// then we increase our output variable by product of rows[row] and columns[row], product and not sum, because
// for example array [[13,13,13],[13,13,13],[13,13,13]] each row has 3 the same columns so 3+3+3 or just 3*3

// Key point: Save rows and columns in hashmaps then check if row exists in columns hashmap(same values) and if yes,
// increase output by their product

class Solution {
  int equalPairs(List<List<int>> grid) {
    final rows = <String, int>{};
    final columns = <String, int>{};
    int output = 0;
    for (int i = 0; i < grid.length; i++) {
      String joinedNumbers = grid[i].join(',');
      rows[joinedNumbers] = rows.containsKey(joinedNumbers) ? rows[joinedNumbers]! + 1 : 1;
      final column = [];
      for (int j = 0; j < grid.length; j++) {
        column.add(grid[j][i]);
      }
      String joinedNumbersColumn = column.join(',');
      columns[joinedNumbersColumn] = columns.containsKey(joinedNumbersColumn) ? columns[joinedNumbersColumn]! + 1 : 1;
    }
    for (var key in rows.keys) {
      if (columns.containsKey(key)) {
        output += rows[key]! * columns[key]!;
      }
    }
    return output;
  }
}

void main() {
  print(Solution().equalPairs([[3,2,1],[1,7,6],[2,7,7]]));
}