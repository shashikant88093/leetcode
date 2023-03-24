
function isIsomorphic(s,t){
    if (s.length !== t.length) return false;
    // Each string has to have its own dictionary
    var sDict = new Map();
    var tDict = new Map();
    for (var i = 0; i < s.length; i++ ) {
        var sc = s[i];
        var tc = t[i];
        if (!sDict.has(sc) && !tDict.has(tc)) {
            sDict.set(sc,tc);
            tDict.set(tc,sc);    
        }
        if (sDict.get(sc) !== tc || tDict.get(tc) !== sc) {
            return false;
        }
    }
    return true;
}
console.log(isIsomorphic("egg","add"))