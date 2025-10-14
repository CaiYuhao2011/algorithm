/*
 * @lc app=leetcode.cn id=445 lang=javascript
 * @lcpr version=30203
 *
 * [445] 两数相加 II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

// 定义一个方法翻转链表
// 递归
// function reverseList(head) {
//     if (head.next == null) {
//         return head;
//     }

//     const last = reverseList(head.next);
//     // 后序遍历
//     head.next.next = head;
//     head.next = null;

//     return last;
// }
// 常规
function reverseList(head) {
    let pre = null;
    let cur = head;
    while(cur != null) {
        const tmp = cur.next;
        cur.next = pre;
        pre = cur;
        cur = tmp;
    }
    return pre;
}

// 解法一：翻转链表（示例代码）
// 解法二：遍历链表，存储到数组里，然后利用数组的 pop 特性，构造栈
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    const list1 = reverseList(l1);
    const list2 = reverseList(l2);
    let p1 = list1;
    let p2 = list2;
    let p = null;

    // 余数
    let carry = 0;
    while (p1 != null || p2 != null || carry > 0) {
        let val = carry;
        if (p1 != null) {
            val += p1.val;
            p1 = p1.next;
        }
        if (p2 != null) {
            val += p2.val;
            p2 = p2.next;
        }
        // 求余数
        carry = (val / 10) | 0;
        val = val % 10;
        const node = new ListNode(val);
        node.next = p;
        p = node;
    }

    return p;
};
// @lc code=end

/*
// @lcpr case=start
// [7,2,4,3]\n[5,6,4]\n
// @lcpr case=end

// @lcpr case=start
// [2,4,3]\n[5,6,4]\n
// @lcpr case=end

// @lcpr case=start
// [0]\n[0]\n
// @lcpr case=end

 */
