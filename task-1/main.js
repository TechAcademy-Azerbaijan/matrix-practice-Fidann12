// Use this matrix for solution
let matrix = [
    [4, -2, 5],
    [1, -4, -12],
    [0, 1, -3]
]

let sum = 0;
let count = 0;
let arr= [];
for(element of matrix){
arr.push(element.join(" "));
for(i= 0 ; i<element.length ;i++){
    const next_element = element[i];
    if(element[i]<0 && element[i]%2==0){
        count++
        sum+=element[i]
    }
}
}
console.log(count);
console.log(sum);

