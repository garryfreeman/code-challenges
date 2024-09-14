/**
 * Link: https://www.codewars.com/kata/515de9ae9dcfc28eb6000001
 *
 * Description:
 * In this kata you should simply determine, whether a given year is a leap year or not. In case you don't know the rules, here they are:
 * - Years divisible by 4 are leap years,
 * - but years divisible by 100 are not leap years,
 * - but years divisible by 400 are leap years.
 *
 * Tested years are in range 1600 ≤ year ≤ 4000.
 */

import { test } from '../tools';

// https://www.codewars.com/kata/526c7363236867513f0005ca
// In this kata you should simply determine, whether a given year is a leap year or not. In case you don't know the rules, here they are:
// Years divisible by 4 are leap years,
// but years divisible by 100 are not leap years,
// but years divisible by 400 are leap years.

function isLeapYear(year: number): boolean {
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}

test(() => isLeapYear(2020), true);
test(() => isLeapYear(2000), true);
test(() => isLeapYear(2015), false);
test(() => isLeapYear(2100), false);
