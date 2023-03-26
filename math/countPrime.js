function primeCount(n){
    let primes = new Array(n).fill(true);
    console.log(primes," + primes")
    primes[0] = false, primes[1] = false;
    for (let i = 2; i < n; i++) {
        for (let j = i**2; j < n; j += i) {
            console.log(j,i,"primsw")
            primes[j] = false;
        }
    }
    console.log(primes," + primes23")

    return primes.filter(bool => bool == true).length;
}

console.log(primeCount(10))