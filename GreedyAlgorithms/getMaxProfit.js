function getMaxProfit(stockPrices) {

  // Calculate the max profit
  if(stockPrices.length < 2) {
    throw new Error ('Needs two or more prices for comparison');
  }
  let minPrice = stockPrices[0];
  let maxProfit = stockPrices[1] - minPrice;
  
  for (let i = 1; i < stockPrices.length; i++) {
    const currentPrice = stockPrices[i];
    const potentialProfit = currentPrice - minPrice;
    
    maxProfit = Math.max(maxProfit, potentialProfit);
    minPrice = Math.min(minPrice, currentPrice);
  }
  
  return maxProfit;
  
}


const test1 = getMaxProfit([1, 5, 3, 2]);
const test2 = getMaxProfit([7, 2, 8, 9]);
const test3 = getMaxProfit([1, 6, 7, 9]);
const test4 = getMaxProfit([9, 7, 4, 1]);

console.log(test1);
console.log(test2);
console.log(test3);
console.log(test4);