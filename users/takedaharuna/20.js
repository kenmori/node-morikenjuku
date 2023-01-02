/*
Return the result of adding the elements next to each other as an array.
input: [1, 2, 4, 10, 12]

output: [3, 6, 14, 22]
*/

const f = input => {
    return input.reduce((result, current, index, array) => {
        if (index < array.length - 1) result.push(current + array[index + 1]);
        return result;
    },[])
}

const input = [1, 2, 4, 10, 12];
const output = f(input);
console.log(output);
