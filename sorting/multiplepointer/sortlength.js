


function sortCount(num){
    // let obj ={}

    // for(let i=0;i<num.length;i++){
    //   obj[num[i]] = true
    // }
    // return Object.keys(obj).length

    let i =0;
    for(let j=1;j<num.length;j++){
        if(num[i] !== num[j]){
            i++
            num[i] = num[j] 
        }
    }
    return i + 1
}

console.log(sortCount([2,4,5,-8,6,-8,-5,333,4,4,4,4,6,6,6,6,]))