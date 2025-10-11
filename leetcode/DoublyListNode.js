/**
 * 双链表
 */
class DoublyListNode {
  constructor(value) {
    this.value = value;
    this.prev = null; // 指向前一个节点
    this.next = null; // 指向后一个节点
  }
}

function createDoublyLinkedList(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return null;
  let head = new DoublyListNode(arr[0]);
  let current = head;
  for (let i = 1; i < arr.length; i++) {
    let newNode = new DoublyListNode(arr[i]);
    current.next = newNode;
    newNode.prev = current;
    current = newNode;
  }
  return head;
}

// 创建一条双链表
let head = createDoublyLinkedList([1, 2, 3, 4, 5]);
let tail = null;

// 从头开始遍历
for (let node = head; node !== null; node = node.next) {
  console.log(node.value); // 输出节点值
    if (node.next === null) {
        tail = node; // 记录尾节点
    }
}

// 从尾开始遍历
for (let node = tail; node !== null; node = node.prev) {
    console.log(node.value); // 输出节点值
}

const newHead = new DoublyListNode(0);
// 在链表头部插入新节点
newHead.next = head;
if (head !== null) {
    head.prev = newHead;
}
head = newHead; // 更新头节点

// zai链表尾部插入新节点
const newTail = new DoublyListNode(6);
if (tail !== null) {
    tail.next = newTail;
    newTail.prev = tail;
}
tail = newTail; // 更新尾节点

// 在第 3 个位置插入新节点
let current = head;
for (let i = 0; i < 2 && current !== null; i++) {
    current = current.next;
}
if (current !== null) {
    let insertNode = new DoublyListNode(2.5);
    insertNode.next = current.next;
    insertNode.prev = current;
    if (current.next !== null) {
        current.next.prev = insertNode;
    }
    current.next = insertNode; // 在第 3 个位置插入新节点
}

// 删除第 4 个节点
current = head;
for (let i = 0; i < 3 && current !== null; i++) {
    current = current.next;
}
if (current !== null && current.next !== null) {
    let toDelete = current.next;
    current.next = toDelete.next;
    if (toDelete.next !== null) {
        toDelete.next.prev = current;
    }
    toDelete.prev = null;
    toDelete.next = null; // 删除第 4 个节点
}

// 删除头部节点
let oldHead = head;
if (head !== null) {
    head = head.next;
    if (head !== null) {
        head.prev = null;
    }
    oldHead.next = null; // 删除头节点
}

// 删除尾部节点
let oldTail = tail;
if (tail !== null) {
    tail = tail.prev;
    if (tail !== null) {
        tail.next = null;
    }
    oldTail.prev = null;
    oldTail.next = null; // 删除尾节点
}
