const a = (b) => b.filter((value) => value && value % 2 === 1);
const b = a([1, 2, 3, 4, 5, 6, 7]);
console.log(b);
