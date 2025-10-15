/*
 * @lc app=leetcode.cn id=25 lang=javascript
 * @lcpr version=30203
 *
 * [25] K 个一组翻转链表
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
 * @param {number} k
 * @return {ListNode}
 */
const reverseBetween = (head, m, n) => {
    let succesor = null;
    const reverseN = (head, n) => {
        if (n == 1) {
            succesor = head.next;
            return head;
        }

        const last = reverseN(head.next, n - 1);
        head.next.next = head;
        head.next = succesor;
        return last;
    }

    if (m == 1) {
        return reverseN(head, n);
    }

    head.next = reverseBetween(head.next, m - 1, n - 1);
    return head;
}

var reverseKGroup = function(head, k) {
    let i = 1;
    let j = i + k - 1;
    let len = 0;
    let p = head;
    while(p != null) {
        len++;
        p = p.next;
    }
    while(j <= len) {
        head = reverseBetween(head, i, j);
        i += k;
        j += k;
    }

    return head;
};
// @lc code=end



/*
// @lcpr case=start
// [1,2,3,4,5]\n2\n
// @lcpr case=end

// @lcpr case=start
// [1,2,3,4,5]\n3\n
// @lcpr case=end

 */

