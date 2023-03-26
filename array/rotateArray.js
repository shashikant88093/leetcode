// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]

function rotateArra(nums, k) {
  for (let i = 0; i < k; i++) {
    let num = nums[nums.length - k +i]
    // console.log(num)
    nums = [num,...nums]

  }
  for(let i=0;i<k;i++){
     nums.pop()
  }
  return nums;


//   for (let i = nums.length - 1; i >= 0; i--) {
//     nums[i + k] = nums[i]
//  }
 
//  for (let i =  k - 1; i >=0; i--) {
//    nums[i] = nums.pop()
//  }
}

console.log(rotateArra([1, 2, 3, 4, 5, 6, 7], 3));
