import { test } from '../../tools';

const operations: Record<string, (a: number, b: number) => number> = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
  '/': (a, b) => Math.trunc(a / b),
};

function evalRPN(tokens: string[]): number {
  const stack: number[] = [];

  for (const token of tokens) {
    if (operations[token]) {
      const b = stack.pop()!;
      const a = stack.pop()!;

      stack.push(operations[token](a, b));
    } else {
      stack.push(Number(token));
    }
  }

  return stack[0];
}

test(() => evalRPN(['2', '1', '+', '3', '*']), 9);
test(() => evalRPN(['4', '13', '5', '/', '+']), 6);
test(() => evalRPN(['10', '6', '9', '3', '+', '-11', '*', '/', '*', '17', '+', '5', '+']), 22);
