class NumberContainers {
  numbers: number[] = [];
  indexValueMap = new Map<number, number>();
  valueIndexMap = new Map<number, Array<number>>();

  constructor() {}

  change(index: number, number: number): void {
    if (this.indexValueMap.has(index)) {
      const oldNumber = this.indexValueMap.get(index)!;
      const oldNumberIndexes = this.valueIndexMap.get(oldNumber);

      if (oldNumberIndexes) {
        delete oldNumberIndexes[index];
      }
    }

    this.indexValueMap.set(index, number);

    if (!this.valueIndexMap.has(number)) {
      this.valueIndexMap.set(number, new Array());
    }

    this.valueIndexMap.get(number)![index] = 1;
  }

  find(number: number): number {
    if (!this.valueIndexMap.has(number)) {
      return -1;
    }

    const numberIndexes = this.valueIndexMap.get(number)!;

    for (let i = 0; i < numberIndexes.length; i++) {
      if (numberIndexes[i]) {
        return i;
      }
    }

    return -1;
  }
}
