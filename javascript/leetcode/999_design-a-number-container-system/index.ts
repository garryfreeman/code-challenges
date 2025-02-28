import { test } from '../tools';

class NumberContainers {
  numbers: number[] = [];
  indexValueMap = new Map<number, number>();
  valueIndexMap = new Map<number, Set<number>>();

  constructor() {}

  change(index: number, number: number): void {
    if (this.indexValueMap.has(index)) {
      const oldNumber = this.indexValueMap.get(index)!;
      const oldNumberIndexes = this.valueIndexMap.get(oldNumber);

      if (oldNumberIndexes) {
        oldNumberIndexes.delete(index);
      }
    }

    this.indexValueMap.set(index, number);

    if (!this.valueIndexMap.has(number)) {
      this.valueIndexMap.set(number, new Set());
    }

    this.valueIndexMap.get(number)!.add(index);
  }

  find(number: number): number {
    if (!this.valueIndexMap.has(number)) {
      return -1;
    }

    const numberIndexes = this.valueIndexMap.get(number)!;

    return numberIndexes.size ? Math.min(...numberIndexes) : -1;
  }
}

// test case 1
// const container = new NumberContainers();
// test(() => container.find(10), -1);
// container.change(1000000000, 10);
// test(() => container.find(10), 1000000000);

// test case 2
// ["NumberContainers","change","find","change","find","find","find"]
// [[],[1,10],[10],[1,20],[10],[20],[30]]
// const container2 = new NumberContainers();
// container2.change(1, 10);
// test(() => container2.find(10), 1);
// container2.change(1, 20);
// test(() => container2.find(10), -1);
// test(() => container2.find(20), 1);
// test(() => container2.find(30), -1);
