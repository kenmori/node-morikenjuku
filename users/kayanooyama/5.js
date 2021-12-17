function input(param) {
	// Create Object from Array
	return Object.assign({}, param);
}
console.log(input(['a', 'b', 'c']));

// input: ["a", "b", "c"]
// output: {0: "a", 1, "b", 2: "c"}
