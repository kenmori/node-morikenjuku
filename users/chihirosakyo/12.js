/* 
input : 
[
  ['0', 'a'],
  ['1', 'b'],
  ['2', 'c']
]

output : 
{ 0: "a", 1: "b", 2: "c" }

*/

function f(input){
  return input.reduce((result, current, i) => {
      result[i] = current[1];
      return result;
  }, {});
}


const input = [
  ['0', 'a'],
  ['1', 'b'],
  ['2', 'c']
];
const output = f(input);
console.log(output);
