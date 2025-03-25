import { test } from '../../tools';

function maxProfit(prices: number[]): number {
  let max = 0;
  let minPrice = prices[0];

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > minPrice) {
      max = Math.max(prices[i] - minPrice, max);
    } else {
      minPrice = prices[i];
    }
  }

  return max;
}

test(() => maxProfit([7, 1, 5, 3, 6, 4]), 5);
test(() => maxProfit([7, 6, 4, 3, 1]), 0);
test(() => maxProfit([1]), 0);
test(() => maxProfit([1, 2]), 1);
test(() => maxProfit([2, 1]), 0);
test(() => maxProfit([1, 2, 3, 4, 5, 6, 7]), 6);
