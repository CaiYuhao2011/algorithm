/*
 * @lc app=leetcode.cn id=206 lang=javascript
 * @lcpr version=30203
 *
 * [206] 反转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    // 解法一：迭代
    // let pre = null;
    // let cur = head;
    // while(cur != null) {
    //     const next = cur.next;
    //     cur.next = pre;
    //     pre = cur;
    //     cur = next;
    // }

    // return pre;
    // 解法二：递归
    if (head == null) {
        return null;
    }
 
    if (head.next == null) {
        return head;
    }

    const last = reverseList(head.next);
    head.next.next = head;
    head.next = null;

    return last;
};
// @lc code=end



/*
// @lcpr case=start
// [1,2,3,4,5]\n
// @lcpr case=end

// @lcpr case=start
// [1,2]\n
// @lcpr case=end

// @lcpr case=start
// []\n
// @lcpr case=end

 */

