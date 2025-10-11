/**
 * 单链表节点
 */
class ListNode {
    constructor(value = 0, next = null) {
        this.value = value;
        this.next = next;
    }
}

/**
 * 根据数组创建单链表
 * @param {Array} arr - 数组
 * @returns {ListNode|null} - 链表头节点
 */
function createLinkedList(arr) {
    if (!Array.isArray(arr) || arr.length === 0) return null;
    let head = new ListNode(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return head;
}

// 遍历单链表
let head = createLinkedList([1, 2, 3, 4, 5]);
for (let node = head; node !== null; node = node.next) {
    console.log(node.value); // 输出节点值
}

/**
 * 在链表头部插入新节点
 */
const newNode = new ListNode(0);
newNode.next = head; // 将新节点插入到链表头部
head = newNode; // 更新头节点

/**
 * 在链表尾部插入新结点
 */
let tail = head;
while (tail.next !== null) {
    tail = tail.next;
}
tail.next = new ListNode(6); // 在链表尾部插入新节点

/**
 * 在第 3 个位置插入新节点
 */
let current = head;
for (let i = 0; i < 2 && current !== null; i++) {
    current = current.next;
}
if (current !== null) {
    let insertNode = new ListNode(2.5);
    insertNode.next = current.next;
    current.next = insertNode; // 在第 3 个位置插入新节点
}

/**
 * 删除第 4 个节点
 */
current = head;
for (let i = 0; i < 3 && current !== null; i++) {
    current = current.next;
}
if (current !== null && current.next !== null) {
    current.next = current.next.next; // 删除第 4 个节点
}

/**
 * 删除末尾节点
 */
current = head;
while (current.next !== null && current.next.next !== null) {
    current = current.next;
}
if (current.next !== null) {
    current.next = null; // 删除末尾节点
}

/**
 * 删除头节点
 */
let oldHead = head;
if (head !== null) {
    head = head.next; // 删除头节点
    oldHead.next = null; // 断开旧头节点的引用
}
