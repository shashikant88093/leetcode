// filter numeric form of string with - and + signs and remove spaces

function stringToInteger(s) {
    // let newStr = s.replace(/[^0-9-+]/g, "").trim();
    // return parseInt(newStr);
    let num = parseInt(s)
    console.log(num);
    return num < -Math.pow(2, 31) ? -Math.pow(2, 31) : num > Math.pow(2, 31) - 1 ? Math.pow(2, 31) - 1 : isNaN(num) ? 0 : num;
    }

console.log(stringToInteger("with words 4193 "));