export class Stack<T> {
  private _arr: T[];

  constructor(initialArray: T[] = []) {
    this._arr = initialArray;
  }

  pop(): T | undefined {
    if (this.isEmpty()) {
      console.log("Stack is empty");
      return undefined;
    }
    return this._arr.pop();
  }

  push(item: T): void {
    this._arr.push(item);
  }

  peek(): T | undefined {
    return this._arr[this._arr.length - 1];
  }

  isEmpty(): boolean {
    return this._arr.length === 0;
  }

  size(): number {
    return this._arr.length;
  }
}
