// function name(arr1, arr2) {
//   if (arr1.length === arr2.length) {
//     for (let i = 0; i < arr1.length; i++) {
//       let corretionIndex = arr2.indexOf(arr1[i] ** 2);
//       console.log(corretionIndex,"corretionIndex")
//       if (corretionIndex === -1) {
//         return false;
//       }
//       arr2.splice(corretionIndex,1)
//     }
//   } else {
//     return false;
//   }
// }

// console.log(name([1,2,3], [4,9,3]));

function anagram(an1, an2) {
  if (an1.toString().length !== an2.length) {
    return false;
  }

  let s1 = an1.toString().split("").sort().join("");
  let t1 = an2.toString().split("").sort().join("");
  return s1 === t1;
}

console.log(anagram("aaz", "zaa"));
