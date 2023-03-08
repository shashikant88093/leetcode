// palindrome number

function palindromeNumber(num) {

    let temp = num;
    let reverse = 0;

    while (temp > 0) {
        let remainder = temp % 10;
        reverse = reverse * 10 + remainder;
        temp = Math.floor(temp / 10);
    }

    if (num === reverse) {
        return true;
    } else {
        return false;
    }
}

console.log(palindromeNumber(1261));