import { test } from '../../tools';

function generateParenthesis(n: number): string[] {
  const result: string[] = [];

  const backtrack = (acc: string, o: number, c: number) => {
    if (acc.length === n * 2) result.push(acc);

    if (o < n) backtrack(acc + '(', o + 1, c + 1);

    if (c > 0) backtrack(acc + ')', o, c - 1);
  };

  backtrack('', 0, 0);

  return result;
}

test(() => generateParenthesis(3), ['((()))', '(()())', '(())()', '()(())', '()()()']);
test(() => generateParenthesis(1), ['()']);
