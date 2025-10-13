function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val);
    this.next = (next===undefined ? null : next);
}

/**
 * 翻转链表
 * @param {ListNode} head
 * @returns
 */
function reverseList(head) {
    if (head.next == null) {
        return head;
    }

    const last = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return last;
}

// 创建链表
function createList() {
    const arr = [1, 2, 3, 4, 5, 6];
    const list = new ListNode(arr[0]);
    let head = list;
    for (let i = 1; i < arr.length; i++) {
        head.next = new ListNode(arr[i]);
        head = head.next;
    }

    return list;
}

let head = createList();
console.log(head);

head = reverseList(head);
console.log(head);

// 解释下思路：
// 假设链表是 1->2->3->4->5->6
// 执行过程如下：
// reverseList(1)； 1.next = 2 不为 null
// 继续 reverseList(2)；2.next = 3 不为 null
// 继续 reverseList(3)；3.next = 4 不为 null
// 继续 reverseList(4)；4.next = 5 不为 null
// 继续 reverseList(5)；5.next = 6 不为 null
// 继续 reverseList(6)；6.next = null，return head 也就是 6，因此 last = 6
// 注意，这时候 6 已经 return，因此函数执行结束了，要开始回溯了，简而言之就是从下往上了，那么第一个回溯的是 5 对吧
// 5->6，翻转为 6->5，那么是不是等于 (5.next = 6).next = 5; 也就是 head.next.next = head;
// 但是这个形成的其实是一个双向链表，因为 5->6，因此 5.next = null，也就是 head.next = null，然后 return last
// 继续回溯 4，返回 last
// 继续回溯 3，返回 last
// 继续回溯 2，返回 last
// 继续回溯 1，返回 last
