function pivot(arr,start=0,end=arr.length+1){
    function swap(array,i,j){
    let temp = array[i]
    array[i] = array[j]
    array[j] = temp
    }
    let pivot = arr[start]
    let swapIdx = start

    for(let i = start +1;i<arr.length;i++){
        if(pivot > arr[i]){
            swapIdx++
            swap(arr,swapIdx,i)
            console.log(arr)
        }
    }
    swap(arr,start,swapIdx)
    return swapIdx
}

function quicksort(arr,left=0,right = arr.length-1){
    if(left<right){
        let pivotindex = pivot(arr,left,right)
        //left
        quicksort(arr,left,pivotindex-1)
        //right
        quicksort(arr,pivotindex+1,right)

    }
    return arr;
}
console.log(quicksort([4,8,2,1,5,7,6,3]))