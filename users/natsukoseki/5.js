// input:["a", "b", "c"]
// output:{0: "a", 1, "b", 2: "c"}

function f(input) {
	return { ...input };
}

const array = ['a', 'b', 'c'];
const output = f(array);
console.log(output);
