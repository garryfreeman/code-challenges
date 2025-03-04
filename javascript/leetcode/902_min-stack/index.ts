import { test } from '../../tools';

class MinStack {
  constructor() {}

  private stack: { num: number; min: number }[] = [];

  push(val: number): void {
    const prev = this.stack[this.stack.length - 1];
    this.stack.push({
      num: val,
      min: prev?.min !== undefined && prev.min < val ? prev.min : val,
      // min: Math.min(prev?.min ?? Number.MAX_SAFE_INTEGER, val),
    });
  }

  pop(): void {
    this.stack.pop();
  }

  top(): number {
    return this.stack[this.stack.length - 1].num;
  }

  getMin(): number {
    return this.stack[this.stack.length - 1].min;
  }
}

{
  const obj = new MinStack();
  obj.push(-2);
  obj.push(0);
  obj.push(-3);
  test(() => obj.getMin(), -3);
  obj.pop();
  test(() => obj.top(), 0);
  test(() => obj.getMin(), -2);
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
