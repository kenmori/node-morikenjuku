/*
input
 ["a", "b", "c", "d"] and 2

output
 [["a", "b"],["c", "d"]]

input
 ["a", "b", "c", "d"]

output
 [["a", "b","c"], ["d"]]

*/

const input01 = ["a", "b", "c", "d"];
const input02 = 2;
const initialValue = 3;


const f = (array, point=initialValue) => 
[array.slice(0, point) , array.slice(point, 4)];


const result01 = f(input01, input02);
const result02 = f(input01);
console.log(result01);
console.log(result02);
