// can be done if the arr is sorted

function binarySearch(arr, targetNum) {
  // add whatever parameters you deem necessary - good luck!
  let min = 0;
  let max = arr.length - 1;
  let guess = Math.floor((min + max) / 2);
  while (arr[guess] !== targetNum && min <= max) {
    if (targetNum < arr[guess]) {
      max = guess - 1;
    } else {
      min = guess + 1;
    }
    guess = Math.floor((min + max) / 2);
  }
  if (arr[guess] == targetNum) {
    return guess;
  }
  return -1;
}
console.log(
  binarySearch([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67,
      71, 73, 79, 83, 89, 97,
    ],71));
