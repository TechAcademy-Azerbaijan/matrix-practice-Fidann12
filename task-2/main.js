// Use this matrix for solution

let matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 1, 2, 3],
    [4, 5, 6, 7]
];

let r = 3;
let c = 2;
let arr = [];
let next_element;
for (let i = 0; i < r; i++) {
    const element = matrix[i];
    for (let j = 0; j < c; j++) {
        next_element = matrix[i][j]
        arr.push(matrix[i][j])
        if (arr.length === c) {
            console.log(arr.toString().replaceAll(",", " "));
            arr = [];
          }
    }
}