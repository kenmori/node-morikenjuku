const a = (b) => ({
  sum: b.join(""),
  length: b.length,
});
const b = a(["a", "b", "c"]);
console.log(b);
