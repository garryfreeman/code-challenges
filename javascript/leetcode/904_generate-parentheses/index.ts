import { test } from '../../tools';

function generateParenthesis(n: number): string[] {}

test(() => generateParenthesis(3), ['((()))', '(()())', '(())()', '()(())', '()()()']);
test(() => generateParenthesis(1), ['()']);
