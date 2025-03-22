type Value = { timestamp: number; value: string };

class TimeMap {
  private map: Map<string, Value[]> = new Map();

  constructor() {}

  set(key: string, value: string, timestamp: number): void {
    if (!this.map.has(key)) {
      this.map.set(key, []);
    }

    this.map.get(key)!.push({ timestamp, value });
  }

  get(key: string, timestamp: number): string {
    const values = this.map.get(key);

    if (!values?.length) {
      return '';
    }

    return this.search(values, timestamp)?.value ?? '';
  }

  private search(array: Value[], target: number): Value | null {
    let left = 0;
    let right = array.length - 1;
    let closest = null;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);

      if (array[mid].timestamp === target) return array[mid];

      if (array[mid].timestamp < target) {
        left = mid + 1;
        closest = array[mid];
      } else {
        right = mid - 1;
      }
    }

    return closest;
  }
}

/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */
