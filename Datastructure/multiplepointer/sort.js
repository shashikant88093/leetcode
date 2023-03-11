function add(sum) {
let left =0
let right = sum.length -1

while(left<right){

    let add = sum[left] + sum[right]
    if(add == 0){
        return [ sum[left] , sum[right]]
    }else if(add> 0){
        right --
    }else{
        left ++
    }
}

}
console.log(add([-3, -2,-1, 0, 1, 2, 3]))
