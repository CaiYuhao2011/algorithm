/*
 * @lc app=leetcode.cn id=23 lang=javascript
 * @lcpr version=30203
 *
 * [23] 合并 K 个升序链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
class MyHeap {
    constructor(comparator) {
        this.size = 0;
        this.heap = [];
        // 默认最小最小堆实现
        this.comparator = comparator || ((a, b) => a - b);
    }

    parent(index) {
        if (index == 0) {
            return -1;
        }
        return (index - 1) >>> 1;
    }

    left(index) {
        return (index << 1) + 1;
    }

    right(index) {
        return (index << 1) + 2;
    }

    swap(i, j) {
        const tmp = this.heap[i];
        this.heap[i] = this.heap[j];
        this.heap[j] = tmp;
    }

    get(index) {
        return this.heap[index];
    }

    set(index, value) {
        this.heap[index] = value;
    }

    // 上浮
    swim(index) {
        // 上浮的逻辑是父亲比孩子大，才上浮
        while(index > 0 && this.comparator(this.get(this.parent(index)), this.get(index)) > 0) {
            const target = this.parent(index);
            this.swap(target, index);
            index = target;
        }
    }

    push(node) {
        this.heap[this.size] = node;
        // 上浮元素
        this.swim(this.size);
        this.size++;
    }

    // 下沉
    sink(index) {
        while (this.left(index) < this.size || this.right(index) < this.size) {
            let target = index;
            if (this.left(index) < this.size && this.comparator(this.get(this.left(index)), this.get(target)) < 0) {
                target = this.left(index);
            }
            if (this.right(index) < this.size && this.comparator(this.get(this.right(index)), this.get(target)) < 0) {
                target = this.right(index);
            }

            if (target == index) {
                break;
            }

            this.swap(target, index);
            index = target;
        }
    }

    pop() {
        if (this.isEmpty()) {
            return null;
        }
        this.size--;
        const node = this.get(0);
        this.set(0, this.get(this.size));
        this.set(this.size, undefined);
        this.sink(0);

        return node;
    }

    isEmpty() {
        return this.size === 0;
    }
}

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    const dp = new MyHeap((a, b) => a.val - b.val);

    for(let i = 0; i < lists.length; i++) {
        if (lists[i] != null) {
            dp.push(lists[i]);
        }
    }

    console.log(dp);

    const dummy = new ListNode(-1);
    let p = dummy;

    while(!dp.isEmpty()) {
        const node = dp.pop();
        p.next = node;

        if (node.next != null) {
            dp.push(node.next);
        }
        p = p.next;
    }

    return dummy.next;
};
// @lc code=end



/*
// @lcpr case=start
// [[1,4,5],[1,3,4],[2,6]]\n
// @lcpr case=end

// @lcpr case=start
// []\n
// @lcpr case=end

// @lcpr case=start
// [[]]\n
// @lcpr case=end

 */

