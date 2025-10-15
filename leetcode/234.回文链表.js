/*
 * @lc app=leetcode.cn id=234 lang=javascript
 * @lcpr version=30203
 *
 * [234] 回文链表
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
 * @return {boolean}
 */
var isPalindrome = function(head) {
    // 解法一：递归
    // let left = head;
    // let res = true;

    // const reverse = (head) => {
    //     if (head == null) {
    //         return null;
    //     }

    //     reverse(head.next);
    //     if (left.val != head.val) {
    //         res = false;
    //     }

    //     left = left.next;
    // }

    // reverse(head);

    // return res;
    // 解法二：快慢指针
    // if (!head || !head.next) {
    //     return true;
    // }
    // let slow = head;
    // let fast = head;
    // while (fast.next != null && fast.next.next != null) {
    //     slow = slow.next;
    //     fast = fast.next.next;
    // }
    // const reverseList = (head) => {
    //     let cur = head;
    //     let pre = null;
    //     while(cur != null) {
    //         const tmp = cur.next;
    //         cur.next = pre;
    //         pre = cur;
    //         cur = tmp;
    //     }

    //     return pre;
    // }

    // let right = reverseList(slow.next);
    // let left = head;

    // while(right != null) {
    //     if (left.val != right.val) {
    //         return false;
    //     }
    //     left = left.next;
    //     right = right.next;
    // }

    // return true;
    // 解法三：左右指针
    const nodeList = [];
    let p = head;
    while(p != null) {
        nodeList.push(p.val);
        p = p.next;
    }
    const len = nodeList.length;
    for(let i = 0, j = len -1; i < j; i++, j--) {
        if (nodeList[i] != nodeList[j]) {
            return false;
        }
    }

    return true;
};
// @lc code=end



/*
// @lcpr case=start
// [1,2,2,1]\n
// @lcpr case=end

// @lcpr case=start
// [1,2]\n
// @lcpr case=end

 */

