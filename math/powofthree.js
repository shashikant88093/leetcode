var isPowerOfThree = function(n) {
    while(n>=3){
        if(n%3!==0) return false;
        n/=3;
    }
    return n===1;
};
console.log(isPowerOfThree(27))