// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

function outer(arr) {
  let result = 1;
  function inner(arrdata) {
    if (arrdata.length === 0) {
      return;
    }
    let n = arrdata[0];
    result = result * n;
    inner(arrdata.slice(1));
  }
  inner(arr);
  return result;
}
console.log(outer([1, 2, 3]));
