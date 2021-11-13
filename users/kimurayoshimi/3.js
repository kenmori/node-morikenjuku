const a = (b) => [...b].findIndex((value) => value === "e");
const b = a("abcdefd");
console.log(b);
