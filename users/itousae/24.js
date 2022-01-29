/**
 * input :[1, 9, 10, 3, 4, 2, 6], 8
 *
 * output [2,6]
 *
 * if second input is 3, return [1, 2] if second input is 20, return false
 *
 * */

const f = (parma, total) => {
  const result = parma.reduce((arr, x) => {
    const y = total - x;
    parma.includes(y) && y !== x && arr.push(x);
    return arr;
  }, []);
  return result.length === 0 ? false : result;
};

console.log(f([1, 9, 10, 3, 4, 2, 6], 8));
console.log(f([1, 9, 10, 3, 4, 2, 6], 3));
console.log(f([1, 9, 10, 3, 4, 2, 6], 20));
