// input:["a", "b", "c"]
// output:{ a: 0, b: 1, c: 2 }

function f(input) {
	const returnObject = input.reduce((acc,cur,index) =>{
		acc[cur] = index;
		return acc;
	},{})
	return returnObject;
}

const array = ['a', 'b', 'c'];
const output = f(array);
console.log(output);


