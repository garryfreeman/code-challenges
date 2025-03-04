import { test } from '../../tools';

function evalRPN(tokens: string[]): number {}

test(() => evalRPN(['2', '1', '+', '3', '*']), 9);
test(() => evalRPN(['4', '13', '5', '/', '+']), 6);
test(() => evalRPN(['10', '6', '9', '3', '+', '-11', '*', '/', '*', '17', '+', '5', '+']), 2);
