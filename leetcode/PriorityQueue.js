class PriorityQueue {
    constructor(capacity, comparator) {
        this.heap = new Array(capacity).fill(undefined);
        this.size = 0;
        this.comparator = comparator || ((a, b) => ((a > b) ? 1 : ((a < b) ? -1 : 0)));
    }

    isEmpty() {
        return this.size === 0;
    }

    parent(index) {
        return Math.floor((index - 1) / 2);
    }

    left(index) {
        return index * 2 + 1;
    }

    right(index) {
        return index * 2 + 2;
    }

    swap(i, j) {
        const tmp = this.heap[i];
        this.heap[i] = this.heap[j];
        this.heap[j] = tmp;
    }

    /**
     * 返回堆顶元素
     */
    peek() {
        if (this.isEmpty()) {
            return null;
        }

        return this.heap[0];
    }

    push(node) {
        if (this.size === this.heap.length) {
            this.resize(this.heap.length * 2);
        }
        this.heap[this.size] = node;
        this.swim(this.size);
        this.size++;
    }

    pop() {
        if (this.isEmpty()) {
            return null;
        }
        const node = this.heap[0];
        this.size--;
        this.swap(this.size, 0);
        this.heap[this.size] = undefined;
        this.sink(0);
        // 缩容
        if (this.size === Math.floor(this.heap.length / 4)) {
            this.resize(Math.floor(this.heap.length / 2));
        }

        return node;
    }

    /**
     * 上浮
     * @param {*} index 
     */
    swim(index) {
        while(index > 0 && this.comparator(this.heap[this.parent(index)], this.heap[index]) > 0) {
            const newIndex = this.parent(index);
            this.swap(index, newIndex);
            index = newIndex;
        }
    }

    /**
     * 下沉
     * @param {*} index 
     */
    sink(index) {
        while(this.left(index) < this.size || this.right(index) < this.size) {
            let target = index;
            if (this.left(index) < this.size && this.comparator(this.heap[this.left(index)], this.heap[target]) < 0) {
                target = this.left(index);
            }
            if (this.right(index) < this.size && this.comparator(this.heap[this.right(index)], this.heap[target]) < 0) {
                target = this.right(index);
            }
            if (target === index) {
                break;
            }
            this.swap(target, index);
            index = target;
        }
    }

    /**
     * 调整堆大小
     * @param {*} capacity 
     */
    resize(capacity) {
        const newHeap = new Array(capacity).fill(undefined);
        for (let i = 0; i < this.size; i++) {
            newHeap[i] = this.heap[i];
        }

        this.heap = newHeap;
    }
}

// 小顶堆
const pq = new PriorityQueue(3, (a, b) => a - b);
pq.push(3);
    console.log(pq.heap);
pq.push(1);
    console.log(pq.heap);
pq.push(4);
    console.log(pq.heap);
pq.push(1);
    console.log(pq.heap);
pq.push(5);
    console.log(pq.heap);
pq.push(9);
    console.log(pq.heap);

// 1 1 3 4 5 9
while (!pq.isEmpty()) {
    console.log(pq.pop());
        console.log(pq.heap);
}
