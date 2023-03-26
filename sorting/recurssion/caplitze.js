function capitalizeFirst(arr) {
  let array = [];
  // add whatever parameters you deem necessary - good luck!
  function inner(arrlist) {
    if (arrlist.length === 0) {
      return;
    }
    let n = arrlist[0];

    array.push(n.toString()[0].toUpperCase() + n.slice(1));
    inner(arrlist.slice(1));
  }
  inner(arr);
  return array;
}

console.log(capitalizeFirst(["car", "taco", "banana"])); // ['Car','Taco','Banana']
