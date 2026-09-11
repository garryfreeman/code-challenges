import { test } from '../../tools';

function calPoints(operations: string[]): number {
  const elements: number[] = [];

  for (const operation of operations) {
    switch (operation) {
      case '+':
        elements.push(elements.at(-2)! + elements.at(-1)!);
        break;

      case 'D':
        elements.push(elements.at(-1)! * 2);
        break;

      case 'C':
        elements.pop();
        break;

      default:
        if (isFinite(Number(operation))) {
          elements.push(Number(operation));
        }
        break;
    }
  }

  return elements.reduce((acc, current) => acc + current, 0);
}

test(() => calPoints(['5', '2', 'C', 'D', '+']), 30);
test(() => calPoints(['5', '-2', '4', 'C', 'D', '9', '+', '+']), 27);
test(() => calPoints(['1', 'C']), 0);
