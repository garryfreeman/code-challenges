import { test } from '../../tools';

function findAnagrams(s: string, p: string): number[] {}

test(() => findAnagrams('cbaebabacd', 'abc'), [0, 6]);
test(() => findAnagrams('abab', 'ab'), [0, 1, 2]);
