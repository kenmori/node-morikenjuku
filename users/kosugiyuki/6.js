// input
// ["a", "b", "c"]
// output
// { a: 0, b: 1, c: 2 }
const input = (array) => {
    let obj = {};
    array.forEach((value, index) => {
      obj[value] = index;
    });
    return obj;
  };
  
  const array = ['a', 'b', 'c'];
  const output = input(array);
  console.log(output);