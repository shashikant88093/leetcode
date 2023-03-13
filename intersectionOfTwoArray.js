// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2]

function intersectionOfTwoArray(nums1,nums2){
    // let arr =[]
    // let largestNumber = nums1.length > nums2.length ? nums1 : nums2
    // let smallestNumber = nums1.length < nums2.length ? nums1 : nums2

    // console.log(largestNumber,smallestNumber)
    // for(let i =0;i<largestNumber.length;i++){
    //     if(smallestNumber.includes(largestNumber[i])){
    //         arr.push(largestNumber[i])
    //     }
    // }
    // return arr
    const dict = {};
    const res = [];
    for(let i=0;i<nums1.length;i++){
        if(dict[nums1[i]]){
            dict[nums1[i]]+=1;
        }else{
            dict[nums1[i]]=1;
        }
    }
    console.log(dict)
    for(let i=0;i<nums2.length;i++){
        if(dict.hasOwnProperty(nums2[i]) && dict[nums2[i]] != 0){
            res.push(nums2[i]);
            dict[nums2[i]]-=1;
        }
    }
    return res;

}

// console.log(intersectionOfTwoArray([4,9,5],[9,4,9,8,4]))
console.log(intersectionOfTwoArray([1,2,2,1],[2,2]))
