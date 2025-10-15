/*
 * @lc app=leetcode.cn id=92 lang=javascript
 * @lcpr version=30203
 *
 * [92] 反转链表 II
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
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    // 解法一：递归
    // let succesor = null;
    // const reverseN = (head, right) => {
    //     if (right == 1) {
    //         succesor = head.next;
    //         return head;
    //     }

    //     const last = reverseN(head.next, right - 1);
    //     head.next.next = head;
    //     head.next = succesor;

    //     return last;
    // }

    // if (left == 1) {
    //     return reverseN(head, right);
    // }

    // head.next = reverseBetween(head.next, left - 1, right - 1);

    // return head;
    // 解法二: 迭代
    const nodeList = [];
    let p = head;
    while(p != null) {
        nodeList.push(p.val);
        p = p.next;
    }
    while(left < right) {
        const tmp = nodeList[left - 1];
        nodeList[left - 1] = nodeList[right - 1];
        nodeList[right - 1] = tmp;
        left++;
        right--;
    }
    const dummy = new ListNode(-1);
    p = dummy;
    for(let i = 0; i < nodeList.length; i++) {
        p.next = new ListNode(nodeList[i]);
        p = p.next;
    }

    return dummy.next;
};
// @lc code=end



/*
// @lcpr case=start
// [1,2,3,4,5]\n2\n4\n
// @lcpr case=end

// @lcpr case=start
// [5]\n1\n1\n
// @lcpr case=end

 */

