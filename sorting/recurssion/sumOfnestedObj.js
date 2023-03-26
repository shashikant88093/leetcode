
// let sum =0

function nestedEvenSum (obj1,sum=0) {
    // add whatever parameters you deem necessary - good luck!'

    for(let key in obj1){
        if(typeof obj1[key] === 'object'){
          sum += nestedEvenSum(obj1[key])
        }else{
            if(typeof obj1[key] === 'number' && obj1[key] % 2 ===0){
                // obj.push(obj1[key])
                sum +=obj1[key]

            }
        }
    }
    return sum
  }
  
  
  var obj1 = {
    outer: 2,
    obj: {
      inner: 2,
      otherObj: {
        superInner: 2,
        notANumber: true,
        alsoNotANumber: "yup"
      }
    }
  }
  
  var obj2 = {
    a: 2,
    b: {b: 2, bb: {b: 3, bb: {b: 2}}},
    c: {c: {c: 2}, cc: 'ball', ccc: 5},
    d: 1,
    e: {e: {e: 2}, ee: 'car'}
  };
  
  console.log(nestedEvenSum(obj2)); // 6
//   nestedEvenSum(obj2); // 10