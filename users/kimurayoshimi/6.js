const a = (b) =>
  b.reduce((target, key, index) => ({ ...target, [key]: index }), {});
const b = a(["a", "b", "c"]);
console.log(b);
