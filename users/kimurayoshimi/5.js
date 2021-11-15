//no1
const a = (b) =>
  b.reduce((target, key, index) => {
    target[index] = key;
    return target;
  }, {});
const b = a(["a", "b", "c"]);
console.log(b);

//no2
const d = (c) => ({ ...c });
const c = d(["a", "b", "c"]);
console.log(c);

//no3
const f = (e) => Object.assign({}, e);
const e = f(["a", "b", "c"]);
console.log(e);
