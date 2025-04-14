import { test } from '../../tools';

// solution 1: hash map
function containsNearbyDuplicate1(nums: number[], k: number): boolean {
  const map = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    if (map.has(num) && Math.abs(i - map.get(num)!) <= k) {
      return true;
    }

    map.set(num, i);
  }

  return false;
}

// solution 2: slide window
function containsNearbyDuplicate(nums: number[], k: number): boolean {
  const window = new Set<number>();

  for (let i = 0; i < nums.length; i++) {
    if (window.has(nums[i])) {
      return true;
    }

    window.add(nums[i]);

    if (window.size > k) {
      window.delete(nums[i - k]);
    }
  }

  return false;
}

test(() => containsNearbyDuplicate([1, 2, 3, 1], 3), true);
test(() => containsNearbyDuplicate([1, 0, 1, 1], 1), true);
test(() => containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2), false);
