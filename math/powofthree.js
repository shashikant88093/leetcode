function powerOfthree(n){
    if(n<=0) return false
    let divides = n / 3
    console.log(divides)
    if(n == (n - divides)){
        return true
    }
    return powerOfthree(n - divides)


}

console.log(powerOfthree(45))