// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Input: nums = [3,3], target = 6
// Output: [0,1]
var twoSum = function (nums, target) {
    for (var i = 0; i <nums.length; i++) {
        var hold = target - nums[i]
        if (nums.includes(hold) && i != nums.indexOf(hold)) {
            return [i, nums.indexOf(hold)]
        }
    }
};

console.log(twoSum([3, 3], 6));
