const a = (b) => b.map((value, index) => ({ [index]: value }));
const b = a(["a", "b", "c"]);
console.log(b);
