/*
 * @lc app=leetcode.cn id=19 lang=javascript
 * @lcpr version=30203
 *
 * [19] 删除链表的倒数第 N 个结点
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    const dummy = new ListNode(-1);
    dummy.next = head;
    let p1 = dummy;
    let p2 = dummy;
    for (let i = 0; i < n + 1; i++) {
        p1 = p1.next;
    }

    while(p1 != null) {
        p1 = p1.next;
        p2 = p2.next;
    }

    if (p2 != null) {
        p2.next = p2.next.next;
    }

    return dummy.next;
};
// @lc code=end



/*
// @lcpr case=start
// [1,2,3,4,5]\n2\n
// @lcpr case=end

// @lcpr case=start
// [1]\n1\n
// @lcpr case=end

// @lcpr case=start
// [1,2]\n1\n
// @lcpr case=end

 */

