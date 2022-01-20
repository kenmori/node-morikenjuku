// [input]
// 3
// [output]
// 3
// 2
// 1
// 0
const input = 3;

const f = (param) => {
  let count = param;
  while (count > 0) {
    console.log(count);
    count--;
  }
  return count;
};

console.log(f(input));
