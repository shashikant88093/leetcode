// https://www.youtube.com/watch?v=_4LotFtNxH0&ab_channel=CodeStudio

// https://www.freecodecamp.org/news/parking-lot-challenge-solved-in-javascript/#:~:text=slots%5Bi%5D%3B%20if%20(slot%20%3D%3D%3D%20carId)%20%7B,%7D%60)%3B%20return%20this.

// char count of string

function charCount(char) {
  let result = {};

  for (let i = 0; i < char.length; i++) {
    let chart = char[i]?.toLowerCase();
    console.log(result[chart] > 0);
    if (result[chart] > 0) {
      result[chart]++;
    } else {
      result[chart] = 1;
    }
  }
  return result;
}

console.log(charCount("helLo"));
