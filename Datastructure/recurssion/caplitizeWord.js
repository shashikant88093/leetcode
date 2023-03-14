function capitalizeWords(arr) {
    // add whatever parameters you deem necessary - good luck!
    let array = [];
    // add whatever parameters you deem necessary - good luck!
    function inner(arrlist) {
      if (arrlist.length === 0) {
        return;
      }
      let n = arrlist[0];
  
      array.push(n.toUpperCase());
      inner(arrlist.slice(1));
    }
    inner(arr);
    return array;
  }
  
  let words = ['i', 'am', 'learning', 'recursion'];
  console.log(capitalizeWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']