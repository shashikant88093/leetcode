function duplicated(nums){
    // let obj = {}
    // for(let key of num){
    //     obj[key] = true
    // }
    // console.log(Object.keys(obj),Object.keys(obj).length)
    // let k = new Set(num)
    // console.log(k)

    // for(let i =0;i<nums.length;i++){
    //     if(nums[i] ==nums[i+1]){
    //         delete nums[i]
    //     }
    // }
    
    // return nums.filter(n => n) 
    const length = nums.length;

    if( length <= 1 ){
        return length;
    }

    let i = 0;

    for(let j = 1; j < length; j++){
        if( nums[i] != nums[j] ){
            i++;
            nums[i] = nums[j];
        }
    }

    return i + 1;
}
console.log(duplicated([1,1,2,3,4,5,5]))