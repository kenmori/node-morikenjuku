const a = (b) => b.includes("e");
const b = a(["a", "b", "c"]);
console.log(b);

const c = (d) => d.some((value) => value === "e");
const d = c(["a", "b", "c"]);
console.log(d);

