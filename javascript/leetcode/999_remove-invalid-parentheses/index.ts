import { test } from '../../tools';

function removeInvalidParentheses(s: string): string[] {}

test(() => removeInvalidParentheses('()())()'), ['(())()', '()()()']);
test(() => removeInvalidParentheses('(a)())()'), ['(a())()', '(a)()()']);
test(() => removeInvalidParentheses(')('), ['']);
