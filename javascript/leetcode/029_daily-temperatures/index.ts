import { test } from '../../tools';

function dailyTemperatures(temperatures: number[]): number[] {
  const stack: number[] = [];
  const result = new Array(temperatures.length).fill(0);

  for (let i = 0; i < temperatures.length; i++) {
    const temp = temperatures[i];

    while (stack.length) {
      const prevI = stack.at(-1)!;

      if (temperatures[prevI] < temp) {
        result[prevI] = i - prevI;

        stack.pop();
      } else {
        break;
      }
    }

    stack.push(i);
  }

  return result;
}

test(() => dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]), [1, 1, 4, 2, 1, 1, 0, 0]);
test(() => dailyTemperatures([30, 40, 50, 60]), [1, 1, 1, 0]);
test(() => dailyTemperatures([30, 60, 90]), [1, 1, 0]);
