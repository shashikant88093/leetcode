// return non-repeating character in a string index if not return -1
let s= "abacddbec";
let uniqueChar = function(s) {
    for (let i = 0; i < s.length; i++) {
        if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
            return i;
        }
    }
    return -1;
}
console.log(uniqueChar(s));
