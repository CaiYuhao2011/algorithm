/*
 * @lc app=leetcode.cn id=86 lang=javascript
 * @lcpr version=30203
 *
 * [86] 分隔链表
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
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    const left = new ListNode(101);
    const right = new ListNode(101);
    let p = head;
    let p1 = left;
    let p2 = right;
    while(p != null) {
        if (p.val < x) {
            p1.next = p;
            p1 = p1.next;
        } else {
            p2.next = p;
            p2 = p2.next;
        }
        p = p.next;
    }
    // 条件是必须，防止环的产生
    p2.next = null;
    p1.next = right.next;
    return left.next;
};
// @lc code=end



/*
// @lcpr case=start
// [1,4,3,2,5,2]\n3\n
// @lcpr case=end

// @lcpr case=start
// [2,1]\n2\n
// @lcpr case=end

 */

