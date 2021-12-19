function input(param) {
	return param.reduce((prev, currentVal, currentIndex) => {
		return { ...prev, [currentVal]: currentIndex };
	}, {});
}
console.log(input(['a', 'b', 'c']));

// input: ["a", "b", "c"]
// output: { a: 0, b: 1, c: 2 }
