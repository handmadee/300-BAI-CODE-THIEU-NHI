export class NodeLinkedList<T> {
  private _data: T;
  private _next: NodeLinkedList<T> | null = null;
  private _prev: NodeLinkedList<T> | null = null;

  constructor(
    data: T,
    next: NodeLinkedList<T> | null = null,
    prev: NodeLinkedList<T> | null = null
  ) {
    this._data = data;
    this._next = next;
    this._prev = prev;
  }

  // Getter and Setter for 'next'
  public get next(): NodeLinkedList<T> | null {
    return this._next;
  }

  public set next(value: NodeLinkedList<T> | null) {
    this._next = value;
  }

  // Getter and Setter for 'prev'
  public get prev(): NodeLinkedList<T> | null {
    return this._prev;
  }

  public set prev(value: NodeLinkedList<T> | null) {
    this._prev = value;
  }

  // Getter and Setter for 'data'
  public get data(): T {
    return this._data;
  }

  public set data(value: T) {
    this._data = value;
  }
}
