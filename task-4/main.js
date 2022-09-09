let matrix = [
    [2, 5, 3, 3, 4],
    [3, 5, 1, 3, 4],
    [4, 6, 1, 2, 3],
    [4, 5, 6, 7, 7],
    [5, 6, 9, 7, 3]
  ];
  console.clear();
  
  let row = 4; //setr
  let col = 2; //sutun
  
  for (let i = 0; i < matrix.length; i++) {
    let arr = matrix[i];
    for (let j = 0; j < arr.length; j++) {
      for (let i = 0; i < matrix.length; i++) {
        if (i + 1 === row && j + 1 === col) {
          console.log(matrix[i][j]);
        }
      }
    }
  }


