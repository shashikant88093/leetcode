function reverseString(str) {
  return str.split("").reverse().join("");
}
reverseString("hello");

function revs(s) {
  for (let i = 0; i < s.length / 2; i++) {
    let n = s[i];
    s[i] = s[s.length - i - 1];
    s[s.length - i - 1] = n;
  }
}
let string = ["h", "e", "l", "l", "o"];
revs(string);
console.log(string);
