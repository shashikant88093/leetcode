// Input: digits = [4,3,2,1]
// Output: [4,3,2,2]

var plusOne = function (digits) {
    const number = BigInt(digits.join("")) + BigInt(1)
    console.log(number)
    const str = String(number);
    return str.split('');
};

console.log(plusOne([4, 3, 2, 1]));
// console.log(plusOne([9]))
// console.log(plusOne([4]))
// console.log(plusOne([9,9]))
