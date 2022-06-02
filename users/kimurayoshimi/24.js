/*
two sum
Please return the combination of the second argument, the element whose value is the sum. If not, return false
input
[1, 9, 10, 3, 4, 2, 6] and 8

output
[2,6]

if second input is 3, return [1, 2] if second input is 20, return false
don't use for(){ for(){}}
*/

const f = (arrey, num) => {
  const result = [];
  arrey.forEach((item) => {
    const diff = num - item;
    diff !== item && new Set(arrey).has(diff) && result.push(item);
  });
  return result.length ? result : false;
};

const result01 = f([1, 9, 10, 3, 4, 2, 6], 8);
const result02 = f([1, 9, 10, 3, 4, 2, 6], 3);
const result03 = f([1, 9, 10, 3, 4, 2, 6], 20);

console.log(result01);
console.log(result02);
console.log(result03);
