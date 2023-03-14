// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false

function someRecursive(arr) {
  if (arr.length === 0) {
    return false;
  }
  let n = arr[0];
  someRecursive(arr.slice(1));
  if (n % 2 !== 0) {
    return true;
  } else {
    false;
  }
}

console.log(someRecursive([1, 2, 3, 4]));
