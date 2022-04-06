/* 
input : 
["a", "b", "c"]

output : 
[{0: "a"}, {1: "b"}, {2: "c"}]


*/

function f(input){
  const objects = input.map((key,i) => ({ [i] : key }))
  return objects;
}

const input = ["a", "b", "c"];
const output = f(input);
console.log(output);
