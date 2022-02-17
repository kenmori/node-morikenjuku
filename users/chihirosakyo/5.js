/* 
input : 
["a", "b", "c"]

output : 
{0: "a", 1, "b", 2: "c"}

*/

function f(input){
  const result = {...input};
  return result;
}

const input = ["a", "b", "c"];
const output = f(input);
console.log(output);
