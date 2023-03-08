

let haystack = "sadbutsad"; 
let needle = "sad";

function strStr(haystack, needle) {
    if(needle === "") return 0;
    if(haystack === "") return -1;
    let newarr = haystack.split(needle);
    console.log(newarr.length);
    console.log(newarr);
    console.log(newarr[0].length);
    if(newarr.length === 1) return -1;
    return newarr[0].length;
}

console.log(strStr(haystack, needle));