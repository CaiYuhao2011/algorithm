class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class LinkedHashMap {
  constructor() {
    this.head = new Node(null, null);
    this.tail = new Node(null, null);
    this.head.next = this.tail;
    this.tail.prev = this.head;
    this.map = new Map();
  }

  get(key) {
    if (!this.map.has(key)) {
      return null;
    }

    return this.map.get(key).value;
  }

  put(key, value) {
    if (!this.map.get(key)) {
      // 在链表尾部插入元素
      const node = new Node(key, value);
      this.addLastNode(node);
      this.map.set(key, node);
      return;
    }

    this.map.get(key).value = value;
  }

  remove(key) {
    if (!this.map.has(key)) {
      return;
    }

    const node = this.map.get(key);
    this.map.delete(key);
    this.removeNode(node);
  }

  containsKey(key) {
    return this.map.has(key);
  }

  // 返回顺序 key
  keys() {
    const keys = [];
    let current = this.head.next;
    while(current !== this.tail) {
      keys.push(current.key);
      current = current.next;
    }
    return keys;
  }

  addLastNode(node) {
    const temp = this.tail.prev;
    temp.next = node;
    node.prev = temp;
    node.next = this.tail;
    this.tail.prev = node;
  }

  removeNode(node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
    node.prev = null;
    node.next = null;
  }
}
