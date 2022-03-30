/* 
input : 
["a", "b", "c"]

output : 
{ a: 0, b: 1, c: 2 }


*/

function f(input){
  const result = input.reduce(function(target, key, index) {
  target[key] = index;
  return target;
}, {});
return result;
}

const input = ["a", "b", "c"];
const output = f(input);
console.log(output);
