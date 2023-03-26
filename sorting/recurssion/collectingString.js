const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

function collectStrings(obj,arr=[]){
    for(let key in obj){

        if(typeof obj[key] === "object"){
           arr = arr.concat(collectStrings(obj[key]))
        }else{
            if(typeof obj[key] === 'string'){
                arr.push(obj[key])

            }
        }
    }
return arr
}

console.log(collectStrings(obj)) // ["foo", "bar", "baz"])