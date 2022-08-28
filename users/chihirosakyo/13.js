/* 
input : { a: 1, b: 2, c: 3 }

output :  { a: 2, b: 4, c: 6 }

*/

function f(input){
  const arr = Object.keys(input); 
  return Object.values(input).reduce((accumulator, currentValue, index) => {
  accumulator[arr[index]] = currentValue * 2;
  return accumulator;
}, {});
}


const input = { a: 1, b: 2, c: 3 };
const output = f(input);
console.log(output);
