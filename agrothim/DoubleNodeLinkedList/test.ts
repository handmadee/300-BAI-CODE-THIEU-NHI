import DefaulftLinkedList from "./linkedList";

const linked = new DefaulftLinkedList<number>();
linked.insertItem(5);
linked.insertItem(1);
linked.insertItem(3);
linked.insertItem(2);
console.log("-----------");
linked.printList();
console.log("-----------");
linked.removeItem(3);
console.log("----END-----");
linked.printList();
console.log("----VER1-----");
linked.deleteFirst();
linked.printList();
