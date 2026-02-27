class MyHashMap {
  private readonly store: Record<number, number>;

  constructor() {
    this.store = {};
  }

  put(key: number, value: number): void {
    this.store[key] = value;
  }

  get(key: number): number {
    if (this.store[key] === undefined) {
      return -1;
    }

    return this.store[key];
  }

  remove(key: number): void {
    delete this.store[key];
  }
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
