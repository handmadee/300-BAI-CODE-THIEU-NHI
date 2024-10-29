import { NodeLinkedList } from "./Node";
import { LinkedList } from "./linklist.interface";

class DefaultLinkedList<T> implements LinkedList<T> {
  getEmty(): boolean {
    throw new Error("Method not implemented.");
  }
  deleteFirt(): void {
    throw new Error("Method not implemented.");
  }
  private _size: number = 0;
  private _head: NodeLinkedList<T> | null = null;
  private _tail: NodeLinkedList<T> | null = null;

  insertItem(item: T): void {
    const node = new NodeLinkedList<T>(item, null, this._tail);

    if (this.isEmpty()) {
      this._head = node;
      this._tail = node;
    } else {
      this._tail!.next = node;
      this._tail = node;
    }
    this._size++;
  }

  removeItem(item: T): boolean {
    let cursor: NodeLinkedList<T> | null = this._head;

    while (cursor && cursor.data !== item) {
      cursor = cursor.next;
    }

    if (!cursor) return false;

    if (cursor === this._head) this.deleteFirst();
    else if (cursor === this._tail) this.deleteLast();
    else {
      cursor.prev!.next = cursor.next;
      cursor.next!.prev = cursor.prev;
    }

    return true;
  }

  find(item: T): T | null {
    let cursor: NodeLinkedList<T> | null = this._head;

    while (cursor) {
      if (cursor.data === item) return cursor.data;
      cursor = cursor.next;
    }

    return null;
  }

  getAt(index: number): T | null {
    if (index < 0 || index >= this._size) return null;

    let cursor: NodeLinkedList<T> | null = this._head;
    let count = 0;

    while (cursor && count < index) {
      cursor = cursor.next;
      count++;
    }

    return cursor ? cursor.data : null;
  }

  length(): number {
    return this._size;
  }

  printList(): void {
    let list = "";
    let cursor: NodeLinkedList<T> | null = this._head;

    while (cursor) {
      list += `${cursor.data} `;
      cursor = cursor.next;
    }

    console.log(list.trim());
  }

  getSize(): number {
    return this._size;
  }

  isEmpty(): boolean {
    return this._size === 0;
  }

  deleteFirst(): void {
    if (!this._head) return;

    this._head = this._head.next;
    if (this._head) this._head.prev = null;
    else this._tail = null;

    this._size--;
  }

  deleteLast(): void {
    if (!this._tail) return;

    this._tail = this._tail.prev;
    if (this._tail) this._tail.next = null;
    else this._head = null;

    this._size--;
  }
}

export default DefaultLinkedList;
