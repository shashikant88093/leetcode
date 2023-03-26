// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]

var moveZeroes = function (nums) {
//   let arr1 = [];
//   let arr2 = [];
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === 0) {
//       arr1.push(nums[i]);
//     } else {
//       arr2.push(nums[i]);
//     }
//   }
//   let sorted = [...new Set(arr2)];
//   return [...sorted, ...arr1];
    let count = 0;
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] !== 0) {
            // console.log(nums[i], nums[count])
            [nums[i], nums[count]] = [nums[count], nums[i]]
            count++;
        }
    }
    return nums
};

console.log(moveZeroes([0,1,0,3,12]));
