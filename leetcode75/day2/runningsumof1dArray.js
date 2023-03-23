// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]

function arr(arr1){
    let num = 0
    let arr2 = []
    for(let i=0;i<arr1.length;i++){
        num = parseInt(num) + parseInt(arr1[i])
        console.log(num)
        arr2.push(num)

    }
return arr2
}

console.log(arr([1,2,3,4]))