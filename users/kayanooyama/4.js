function input(param) {
	// Return odd numbers
	const arr = [];

	param.forEach((el) => {
		if (el % 2 !== 0) {
			arr.push(el);
		}
	});

	return arr;
}
console.log(input([1, 2, 3, 4, 5, 6, 7]));

// input: [1, 2, 3, 4, 5, 6, 7]
// output: [1, 3, 5, 7]
