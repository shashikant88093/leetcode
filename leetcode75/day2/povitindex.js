// Input: nums = [1,7,3,6,5,6]
// Output: 3
// Explanation:
// The pivot index is 3.
// Left sum = nums[0] + nums[1] + nums[2] = 1 + 7 + 3 = 11
// Right sum = nums[4] + nums[5] = 5 + 6 = 11

function povit(nums){
    let left = 0
    let right = nums.reduce((a, b) => a + b);
for (let i = 0; i < nums.length; i++) {
    console.log(i)
    right -= nums[i];
    if (left == right) {
        return i;
    }
    left += nums[i];
} 
return -1; 
}
console.log(povit([1,7,3,6,5,6]))