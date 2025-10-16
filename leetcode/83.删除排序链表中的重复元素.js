/*
 * @lc app=leetcode.cn id=83 lang=javascript
 * @lcpr version=30203
 *
 * [83] 删除排序链表中的重复元素
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
    if (head == null || head.next == null) {
        return head;
    }
    let slow = head;
    let fast = head;
    while (fast != null) {
        if (fast.val != slow.val) {
            slow.next = fast;
            slow = slow.next;
        }
        fast = fast.next;
    }

    slow.next = null;

    return head;
};
// @lc code=end



/*
// @lcpr case=start
// [1,1,2]\n
// @lcpr case=end

// @lcpr case=start
// [1,1,2,3,3]\n
// @lcpr case=end

 */

