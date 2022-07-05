/* 
input : 
[1, 2, 3, 4]

output : 
{
  sum: 10,
  ids: [
    {
      1: { value: 1 },
      2: { value: 2 },
      3: { value: 3 },
      4: { value: 4 }
    }
  ]
}

*/

function f(input){
  return input.reduce((result, current, i) => {
      result['sum'] += current;
      result['ids'][i] = { [current] : {value: current} };
      return result;
  }, {sum:0, ids:[]});
}


const input = [1, 2, 3, 4];
const output = f(input);
console.log(output);
