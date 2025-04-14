import { test } from '../../tools';

function checkInclusion(s1: string, s2: string): boolean {}

test(() => checkInclusion('ab', 'eidbaooo'), true);
test(() => checkInclusion('ab', 'eidboaoo'), false);
test(() => checkInclusion('abc', 'ccccbbbbaaaa'), false);
test(() => checkInclusion('aab', 'aba'), true);
test(() => checkInclusion('aab', 'abb'), false);
test(() => checkInclusion('ab', 'abab'), true);
test(() => checkInclusion('ab', 'a'), false);
