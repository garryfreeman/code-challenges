import { test } from '../../tools';

function isValid(s: string): boolean {}

test(() => isValid('()'), true);
test(() => isValid('()[]{}'), true);
test(() => isValid('(]'), false);
test(() => isValid('([])'), true);
