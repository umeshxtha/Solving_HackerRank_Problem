function calculateDiagonals(matrix){
    var n = matrix.length;
    var diag1 = 0;
    var diag2 = 0;
    for(var i=0; i<n; i++){
        for(var j=0; j<n; j++){
            // an element from the main diagonal
            if(i === j) { 
                diag1 += matrix[i][j];
            }
            // an element from the counterdiagonal
            if(i + j === n - 1){
                diag2 += matrix[i][j];
            }
        }
    }
    return Math.abs(diag1 - diag2);
}
var matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];

  console.log(calculateDiagonals(matrix))