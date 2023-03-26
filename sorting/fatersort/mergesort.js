function mergesort(arr1, arr2) {
  let arr = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      arr.push(arr1[i]);
      i++;
    } else {
      arr.push(arr2[j]);
      j++;
    }
  }
  while(i<arr1.length){
    arr.push(arr1[i])
    i++
  }
  while(j<arr2.length){
    arr.push(arr2[j])
    j++
  }

  return arr;
}

// let arr1 = [1,10,50];
// let arr2 = [2,14,99,100];

// console.log(mergesort(arr1, arr2));


function mergesort2(arr){
   if(arr.length <= 1) return arr;
   let mid = Math.floor(arr.length/2)
   let left =mergesort2(arr.slice(0,mid))
   let right = mergesort2(arr.slice(mid))
   return mergesort(left,right)
}
console.log(mergesort2([10,24,76,73,72,1,9]))
