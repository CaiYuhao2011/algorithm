class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}

class ArrayHashMap {
    constructor() {
        // 存储 key 和 key 在 arr 中的索引
        this.map = new Map();
        // 存储 Node
        this.arr = [];
    }

    get(key) {
        if (!this.map.has(key)) {
            return null;
        }
        return this.arr[this.map.get(key)].value;
    }

    put(key, value) {
        // 不存在才新增，存在不新增
        if (!this.map.has(key)) {
            const node = new Node(key, value);
            this.arr.push(node);
            this.map.set(key, this.arr.length - 1);
            return;
        }

        // 存在就更新值
        const index = this.map.get(key);
        this.arr[index].value = value;
    }

    remove(key) {
        if (!this.map.has(key)) {
            return;
        }
        const index = this.map.get(key);
        const node = this.arr[index];
        // 交换元素
        const lastIndex = this.arr.length - 1;
        const lastNode = this.arr[lastIndex]
        this.arr[index] = lastNode;
        this.arr[lastIndex] = node;
        // 删除最后一项
        this.arr.pop();
        this.map.delete(key);
        // 重新设置 lastNode 对应的索引
        this.map.set(lastNode.key, index);
    }

    randomKey() {
        const index = Math.floor(Math.random() * (this.arr.length - 1));
        return this.arr[index].key;
    }

    containsKey(key) {
        return this.map.has(key);
    }

    size() {
        return this.map.size;
    }
}