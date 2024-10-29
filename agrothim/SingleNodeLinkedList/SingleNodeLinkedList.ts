import { LinkedList } from "../DoubleNodeLinkedList/linklist.interface";
import Node from "./Node";

export default class SingleNode<T> implements LinkedList<T> {
  private _size: number = 0;
  private _head: Node<T> | null = null;
  private _tail: Node<T> | null = null;

  // Thêm phần tử vào cuối danh sách
  insertItem(item: T): void {
    const newNode = new Node(item, null);

    if (this.isEmpty()) {
      this._head = newNode;
      this._tail = newNode;
    } else {
      this._tail!.next = newNode;
      this._tail = newNode;
    }

    this._size++;
  }

  // Xoá phần tử với giá trị cụ thể
  removeItem(item: T): boolean {
    let cursor = this._head;
    let previous: Node<T> | null = null;

    while (cursor) {
      if (cursor.data === item) {
        if (previous) {
          previous.next = cursor.next;
        } else {
          this._head = cursor.next;
        }

        if (cursor === this._tail) {
          this._tail = previous;
        }

        this._size--;
        return true;
      }

      previous = cursor;
      cursor = cursor.next;
    }

    return false; // Không tìm thấy phần tử cần xoá
  }

  // Tìm phần tử theo giá trị
  find(item: T): T | null {
    let cursor = this._head;

    while (cursor) {
      if (cursor.data === item) return cursor.data;
      cursor = cursor.next;
    }

    return null;
  }

  // Lấy phần tử theo chỉ số
  getAt(index: number): T | null {
    if (index < 0 || index >= this._size) return null;

    let cursor = this._head;
    let count = 0;

    while (cursor && count < index) {
      cursor = cursor.next;
      count++;
    }

    return cursor ? cursor.data : null;
  }

  // Trả về kích thước của danh sách
  getSize(): number {
    return this._size;
  }

  // Kiểm tra danh sách rỗng
  isEmpty(): boolean {
    return this._size === 0;
  }

  // In danh sách ra console
  printList(): void {
    let cursor = this._head;
    let notification = "";
    while (cursor != null) {
      notification += `${cursor.data} -> `;
      cursor = cursor.next;
    }

    console.log(notification + "null");
  }

  // Xoá node đầu tiên
  deleteFirst(): void {
    if (!this._head) return;

    this._head = this._head.next;
    if (!this._head) this._tail = null; // Nếu danh sách chỉ còn 1 phần tử

    this._size--;
  }

  // Xoá node cuối cùng
  deleteLast(): void {
    if (!this._head) return;

    if (this._head === this._tail) {
      this._head = null;
      this._tail = null;
    } else {
      let cursor = this._head;
      while (cursor.next !== this._tail) {
        cursor = cursor.next!;
      }
      cursor.next = null;
      this._tail = cursor;
    }

    this._size--;
  }

  length(): number {
    throw new Error("Method not implemented.");
  }
  getEmty(): boolean {
    throw new Error("Method not implemented.");
  }
  deleteFirt(): void {
    throw new Error("Method not implemented.");
  }
}
