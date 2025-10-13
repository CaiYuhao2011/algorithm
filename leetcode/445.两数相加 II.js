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
function reverseList(head) {
    if (head.next) {
        return head;
    }

    const last = reverseList(head.next);
    // 后序遍历
    head.next.next = head;
    head.next = null;

    return last;
}

// 解法一：翻转链表（示例代码）
// 解法二：遍历链表，存储到数组里，然后利用数组的 pop 特性，构造栈
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    l1 = reverseList(l1);
    l2 = reverseList(l2);

    
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

