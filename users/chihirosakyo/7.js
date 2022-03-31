/* 
input : 
["a", "b", "c"]

output : 
{sum: "abc", length: 3}


*/

function f(input){
  const object = {};
  object.sum = input.join('');
  object.length = input.length;
  return object;
}

const input = ["a", "b", "c"];
const output = f(input);
console.log(output);
