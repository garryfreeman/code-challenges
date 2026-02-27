class MyHashSet {
  hashSet: Record<number, boolean> = {};

  constructor() {}

  add(key: number): void {
    this.hashSet[key] = true;
  }

  remove(key: number): void {
    delete this.hashSet[key];
  }

  contains(key: number): boolean {
    return this.hashSet[key] === true;
  }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
