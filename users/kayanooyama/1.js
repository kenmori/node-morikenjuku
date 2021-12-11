function input1(param) {
	const str = param.split('');

	return str;
}
console.log(input1('abc'));

function input2(param) {
	const arr = [];
	for (var i = 0; i < param.length; i++) {
		arr.push(param[i]);
	}

	return arr;
}
console.log(input2('abc'));

// input: "abc"
// output: ["a", "b", "c"]
