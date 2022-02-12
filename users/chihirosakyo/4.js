/* 
input : 
[1, 2, 3, 4, 5, 6, 7]

output : 
[1, 3, 5, 7]

*/

function f(input){
  const result =input.filter( value => ((value % 2) != 0) )
  return result;
}

const input = [1, 2, 3, 4, 5, 6, 7];
const output = f(input);
console.log(output);
