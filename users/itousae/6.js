/* 
input:["a", "b", "c"]
output:{ a: 0, b: 1, c: 2 }
*/

function output(array) {
  return array.reduce((obj, current, index) => {
    obj[current] = index;
    return obj;
  }, {});
}

const input = ["a", "b", "c"];
console.log(output(input));


