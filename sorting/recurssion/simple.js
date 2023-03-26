// function simple(num){
//   if(num <=0) return num
//     console.log("loginData",num)
//     num--
//     simple(num)

// }

// console.log(simple(5))
// factorail
function fact(n) {
  if (n === 1) {
    return 1;
  }
  return n * fact(n - 1);
}

console.log(fact(5));

// odd in array 

function outer(input){

    let result = []
    function inner(inputData){
        if(inputData.length === 0 ){
            return
        }
        if(inputData[0] % 2 !== 0){
            result.push(inputData[0])
        }

        inner(inputData.slice(1))

    }
    inner(input)
    return result
}
console.log(outer([1,2,3,4,5,6,7,8,9,10]))
