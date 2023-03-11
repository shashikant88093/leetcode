// // palindrome number

// function palindromeNumber(num) {

//     let temp = num;
//     let reverse = 0;

//     while (temp > 0) {
//         let remainder = temp % 10;
//         reverse = reverse * 10 + remainder;
//         temp = Math.floor(temp / 10);
//     }
//     console.log(reverse, num)

//     if (num === reverse) {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(palindromeNumber(182));



function anagram(an1, an2) {
    if (an1.toString().length !== an2.toString().length) {
      return false;
    }
  
    let s1 = an1.toString().split("").sort().join("");
    let t1 = an2.toString().split("").sort().join("");
    return s1 === t1;
  }
  
  console.log(anagram(182, 281));