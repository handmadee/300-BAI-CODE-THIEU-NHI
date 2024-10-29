export default class Node<T> {
  private _data: T | null;
  private _next: Node<T> | null;

  constructor(data: T, next: Node<T> | null) {
    this._data = data;
    this._next = next;
  }

  /**
   * Getter data
   * @return {T }
   */
  public get data(): T | null {
    return this._data;
  }

  /**
   * Setter data
   * @param {T } value
   */
  public set data(value: T | null) {
    this._data = value;
  }

  /**
   * Getter next
   * @return {Node<T> }
   */
  public get next(): Node<T> | null {
    return this._next;
  }

  /**
   * Setter next
   * @param {Node<T> } value
   */
  public set next(value: Node<T> | null) {
    this._next = value;
  }
}
