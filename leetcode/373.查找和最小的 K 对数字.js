/*
 * @lc app=leetcode.cn id=373 lang=javascript
 * @lcpr version=30203
 *
 * [373] 查找和最小的 K 对数字
 */

// @lc code=start
class MyHeap {
    constructor() {
        this.heap = [];
        this.size = 0;
    }

    parent(index) {
        if (index === 0) {
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

    isEmpty() {
        return this.size == 0;
    }

    swap(i, j) {
        const tmp = this.heap[i];
        this.heap[i] = this.heap[j];
        this.heap[j] = tmp;
    }

    comparator(i, j) {
        return (this.heap[i][0] + this.heap[i][1]) - (this.heap[j][0] + this.heap[j][1]);
    }

    // 上浮元素
    swim(index) {
        while(index > 0 && this.comparator(this.parent(index), index) > 0) {
            const target = this.parent(index);
            this.swap(target, index);
            index = target;
        }
    }

    push(node) {
        this.heap[this.size] = node;
        this.swim(this.size);
        this.size++;
    }

    sink(index) {
        while(this.left(index) < this.size || this.right(index) < this.size) {
            let target = index;
            if (this.left(index) < this.size && this.comparator(this.left(index), target) < 0) {
                target = this.left(index);
            }
            if (this.right(index) < this.size && this.comparator(this.right(index), target) < 0) {
                target = this.right(index);
            }

            if (target == index) {
                break;
            }

            this.swap(index, target);
            index = target;
        }
    }

    pop() {
        if (this.isEmpty()) {
            return null;
        }

        this.size--;
        const node = this.heap[0];
        this.heap[0] = this.heap[this.size];
        this.heap[this.size] = undefined;
        this.sink(0);
        return node;
    }
}

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function(nums1, nums2, k) {
    const pq = new MyHeap();
    for (let i = 0; i < nums1.length; i++) {
        pq.push([nums1[i], nums2[0], i, 0]);
    }

    const res = [];

    while(!pq.isEmpty() && k > 0) {
        const node = pq.pop();
        k--;
        res.push([node[0], node[1]]);
        const i = node[2];
        const j = node[3] + 1;
        if (j < nums2.length) {
            pq.push([nums1[i], nums2[j], i, j]);
        }
    }

    return res;
};
// @lc code=end



/*
// @lcpr case=start
// [1,7,11]\n[2,4,6]\n3\n
// @lcpr case=end

// @lcpr case=start
// [1,1,2]\n[1,2,3]\n2\n
// @lcpr case=end

 */

