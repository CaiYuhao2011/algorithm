/*
 * @lc app=leetcode.cn id=82 lang=javascript
 * @lcpr version=30203
 *
 * [82] 删除排序链表中的重复元素 II
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
var deleteDuplicates = function(head) {
    let pre = null;
    let p = head;
    const list = new ListNode(-1);
    let l = list;
    while (p != null) {
        if ((p.next != null && p.val == p.next.val) || (pre != null && p.val == pre.val)) {
            // 不做任何处理
        } else {
            l.next = p;
            l = l.next;
        }
        pre = p;
        p = p.next;
    }

    // 要断开原链表的连接
    // 举个例子 [1, 2, 2]，期望输出应该是 [1], 但 l.next = [1, 2, 2]，因此不断开的情况下实际输出是 [1, 2, 2]
    l.next = null;

    return list.next;
};
// @lc code=end



/*
// @lcpr case=start
// [1,2,3,3,4,4,5]\n
// @lcpr case=end

// @lcpr case=start
// [1,1,1,2,3]\n
// @lcpr case=end

 */

