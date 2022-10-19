/* 
input : 'type=listing&page=2&rowCount=10'

output :  {type: "listing", page: "2", rowCount: "10"}

*/

function f(input){
  const param = new URLSearchParams(input);
  return Object.fromEntries(param);
}


const input = 'type=listing&page=2&rowCount=10';
const output = f(input);
console.log(output);
