function countMaxRepeats(arr: number[]) {
  let max = 0;
  let current = 0;

  for (let i = 0; i < arr.length; i++) {
    if (i === 0 || arr[i] === arr[i - 1]) {
      current++;
    } else if (max >= arr.length - i) {
      break;
    } else {
      current = 1;
    }

    if (current > max) {
      max = current;
    }
  }

  return max;
}

console.log(countMaxRepeats([]), 0);
console.log(countMaxRepeats([0, 1, 0, 1]), 1);
console.log(countMaxRepeats([0, 1, 1, 1]), 3);
console.log(countMaxRepeats([0, 0, 1, 1]), 2);
console.log(countMaxRepeats([1, 1, 1, 1]), 4);
console.log(countMaxRepeats([1, 1, 1, 1, 0, 0, 0, 1]), 4);
