function singleNumber(n){
if(n.length === 1){
    return n[0]
}else{
    let number ={}
    for(let i=0;i<n.length;i++){
        let newNumber = n[i]
        if(number[newNumber] > 0){
            number[newNumber]++
        }else{
            number[newNumber] = 1
        }

    }

    for (const key in number) {
        if (number[key]  === 1)
        return key
    }

}
}

console.log(singleNumber([1]))