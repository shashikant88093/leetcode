// palindrom string with removing spaces and punctuation

function palindrome(s) {
    let newStr = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    console.log(newStr);
    return newStr === newStr.split("").reverse().join("");
    }

console.log(palindrome("A man, a plan, a canal. Panama"));