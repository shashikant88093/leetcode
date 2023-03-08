// return non-repeating character in a string index if not return -1
let s= "eabacddbecf";
let uniqueChar = function(s) {
    for (let i = 0; i < s.length; i++) {
        if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
            return i;
        }
    }
    return -1;
    // for and if and count
 
    
    
     
    // two for loops
    // let count = 0;
    // for (let i = 0; i < s.length; i++) {
    //     count = 0;
    //     for (let j = 0; j < s.length; j++) {
    //         if (s[i] === s[j]) {
    //             count++;
    //         }
    //     }
    //     if (count === 1) {
    //         return i;
    //     }
    // }
    // return -1;
}
console.log(uniqueChar(s));
