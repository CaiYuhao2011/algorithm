/*
 * @lc app=leetcode.cn id=378 lang=javascript
 * @lcpr version=30203
 *
 * [378] 有序矩阵中第 K 小的元素
 */
// @lc code=start
class MyHeap {
    constructor() {
        this.heap = [];
        this.size = 0;
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

    isEmpty() {
        return this.size == 0;
    }

    comparator(i, j) {
        return this.heap[i][0] - this.heap[j][0];
    }

    swap(i, j) {
        const tmp = this.heap[i];
        this.heap[i] = this.heap[j];
        this.heap[j] = tmp;
    }

    // 上浮
    swim(index) {
        // 和父级元素做比较，如果父亲比我大，则交换
        while(index > 0 && this.comparator(this.parent(index), index) > 0) {
            const target = this.parent(index);
            this.swap(target, index);
            index = target;
        }
    }

    push(node) {
        this.heap[this.size] = node;
        // 元素上浮
        this.swim(this.size);
        this.size++;
    }

    // 下沉
    sink(index) {
        // 持续对比左右子树
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

            this.swap(target, index);
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
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
    const dp = new MyHeap();
    for (let i = 0; i < matrix.length; i++) {
        dp.push([matrix[i][0], i, 0]);
    }

    let res = -1;

    while(!dp.isEmpty() && k > 0) {
        const node = dp.pop();
        res = node[0];
        const j = node[2] + 1;
        const i = node[1];
        if (j < matrix[i].length) {
            dp.push([matrix[i][j], i, j]);
        }
        k--;
    }

    return res;
};
// @lc code=end

/*
// @lcpr case=start
// [[1,5,9],[10,11,13],[12,13,15]]\n8\n
// @lcpr case=end

// @lcpr case=start
// [[-5]]\n1\n
// @lcpr case=end

 */

