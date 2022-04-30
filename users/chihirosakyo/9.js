/* 
input : 
["a", "b", "c"]

output : 
false


*/

function f(input){
  const result = input.some(value => value === "e");
  return result;
}

const input = ["a", "b", "c"];
const output = f(input);
console.log(output);
