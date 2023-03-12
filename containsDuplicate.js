// [1,2,3,1]

function containsDuplicate(nums) {
//     if(nums.length ===1 ) return false
//   for (let i = 0; i < nums.length; i++) {
//     console.log(nums[i] , nums[nums.length - 1-i])

//     if (nums[i] === nums[nums.length - 1-i]) {
//       return true;
//     } 
//   }
//   return false
console.log([...new Set(nums)].length != nums.length)
}

// console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]));
console.log(containsDuplicate([1,5,-2,-4,0]));
// console.log(containsDuplicate([0]));
// console.log(containsDuplicate([1,2,3,4]));

