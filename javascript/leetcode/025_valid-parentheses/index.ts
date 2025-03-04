import { test } from '../../tools';

const dict: Record<string, string> = {
  '(': ')',
  '{': '}',
  '[': ']',
};

function isValid(s: string): boolean {
  if (s.length == 1) return false;

  const stack: string[] = [];

  for (const p of s) {
    if (dict[p]) {
      stack.push(dict[p]);

      continue;
    } else if (!stack.length || stack.pop() !== p) {
      return false;
    }
  }

  return !stack.length;
}

test(() => isValid('()'), true);
test(() => isValid('()[]{}'), true);
test(() => isValid('(]'), false);
test(() => isValid('([])'), true);
