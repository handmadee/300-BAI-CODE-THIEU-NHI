export interface LinkedList<T> {
  insertItem(item: T): void;
  removeItem(item: T): boolean;
  find(item: T): T | null;
  getAt(index: number): T | null;
  length(): number;
  printList(): void;
  getSize(): number;
  getEmty(): boolean;
  deleteFirt(): void;
  deleteLast(): void;
}
