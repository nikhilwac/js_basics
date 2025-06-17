let prices = [7, 2, 5, 3, 6, 1, 4];

function maxProfit(prices) {
  let max_profit = 0;
  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      let profit = prices[j] - prices[i];
      max_profit = Math.max(max_profit, profit);
    }
  }

  return max_profit;
}

console.log(maxProfit(prices));

function maxProfit2(prices) {
  let max_profit = 0;
  let minPrice = Infinity;

  for (let price of prices) {
    if (price < minPrice) {
      minPrice = price;
    }
    let profit = price - minPrice;
    if (price > max_profit) {
      max_profit = profit;
    }
  }

  return max_profit;
}
