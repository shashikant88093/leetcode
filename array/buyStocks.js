function maxProfit(prices) {
  let j = 0;
  let stock = [];
  let output =0
  for (let i = 1; i < prices.length; i++) {
    let number = prices[j] > prices[i] ? 0 : prices[i];
    if (number !== 0) {
        stock.push(prices[i] - prices[j])
    }
    j++;

  }
  for(let k=0;k<stock.length;k++){
    output+=stock[k]
  }

  return output

}
console.log(maxProfit([7,6,4,3,1]));
