let s,t;
s = "anagram", t = "nagaram";

var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    let s1 = s.split("").sort().join("");
    let t1 = t.split("").sort().join("");
    return s1 === t1;
}