let number = 12345;

// function reverseNumber(n) {
//     let s = n.toString();
//     let r = s.split("").reverse().join("");
//     return parseInt(r);
//     }
// while loop
function reverseNumber(x) {
    var reverse = 0
  var isNegative = x < 0 ? -1 : 1
  x = x * isNegative

  // capture single digits
  if (x / 10 < 1) {
    return x
  }

  // reverse
  while (x >= 1) {
    var diff = parseInt(x % 10)
    reverse = (reverse * 10) + diff
    x = x / 10
  }

  // capture greater than 32bit
  // Math.pow(2,31)-1. is bitwise operator for 32bit number in JS that is 2^31-1 are positive numbers and 2^31 are negative numbers
  if (reverse > Math.pow(2,31)-1) {
    return 0;
  }

  // capture negative
  return reverse * isNegative
}

console.log(reverseNumber(number));