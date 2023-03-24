
function isSubsequnce(s,t){
    let i = 0;
    let j = 0;
    while(j<t.length && i<s.length){
        if(s[i]!=t[j]){
            j++;
        }else{
            i++;
            j++;
        }
    }
   return (i==s.length)?true:false;

}

console.log(isSubsequnce("abc","ahbgdc"))