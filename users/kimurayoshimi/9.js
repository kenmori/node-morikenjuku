const a = (b) => b.includes("e");
const b = a(["a", "b", "c"]);
console.log(b);

const c = (d) => d.find((value) => value === "e");
const d = a(["a", "b", "c"]);
console.log(d);

