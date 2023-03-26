// longest command prefix in an array of strings

function longestCommonPrefix(strs) {
    // let result = ""
    // for(let i = 0; i < strs[0].length ; i++){
    //     for(let j = 1; j<strs.length ; j++){
    //         if(strs[j][i]!== strs[0][i] || strs[j].length === i){
    //             return result;
    //         }
    //     }
    //     result = result.concat(strs[0][i]);
    // }
    // return result
    strs.sort();
    for (let i = 0; i < strs[0].length; i++) {
      if (strs[0][i] !== strs[strs.length - 1][i]) return strs[0].substr(0, i);
    }
    return strs[0];
}

let strs = ["flower","flow","flight"];
console.log(longestCommonPrefix(strs));