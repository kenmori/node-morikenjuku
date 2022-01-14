// input
//  'type=listing&page=2&rowCount=10'

//  output
//  {type: "listing", page: "2", rowCount: "10"}

const input = 'type=listing&page=2&rowCount=10';

const f = (input) => {
    const inputArray = input.split('&');
    let splitValue = [];
    inputArray.forEach((value) => {
        const tmp = value.split('=');
        splitValue.push(tmp);
    });
    return splitValue.reduce((obj, current) => {
        obj[current[0]] = current[1];
        return obj;
    }, {});
};

console.log(f(input));
