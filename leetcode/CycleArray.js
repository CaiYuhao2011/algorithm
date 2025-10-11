/**
 * 循环数组
 */
class CycleArray {
  constructor(size = 1) {
    this.size = size; // 数组的固定大小
    this.arr = new Array(size).fill(null);
    this.count = 0;
    this.start = 0;
    this.end = 0;
  }

  resize(newSize) {
    if (newSize <= 0) return;
    const newArr = new Array(newSize).fill(null);
    for (let i = 0; i < this.count; i++) {
      newArr[i] = this.arr[(this.start + i) % this.size];
    }
    this.arr = newArr;
    this.size = newSize;
    this.start = 0;
    this.end = this.count;
  }

  addFirst(val) {
    if (this.isFull()) {
      this.resize(this.size * 2);
    }
    // start 为左闭
    this.start = (this.start - 1 + this.size) % this.size;
    this.arr[this.start] = val;
    this.count++;
  }

  removeFirst() {
    if (this.isEmpty()) return null;
    this.arr[this.start] = null;
    this.start = (this.start + 1) % this.size;
    this.count--;
    // 如果数组元素数量减少到原大小的四分之一，则减小数组大小为一半
    if (this.count > 0 && this.count === this.size / 4) {
      this.resize(this.size / 2);
    }
  }

  addLast(val) {
    if (this.isFull()) {
      this.resize(this.size * 2);
    }
    this.arr[this.end] = val;
    this.end = (this.end + 1) % this.size;
    this.count++;
  }

  removeLast() {
    if (this.isEmpty()) return null;
    this.end = (this.end - 1 + this.size) % this.size;
    this.arr[this.end] = null;
    this.count--;
    // 如果数组元素数量减少到原大小的四分之一，则减小数组大小为一半
    if (this.count > 0 && this.count === this.size / 4) {
      this.resize(this.size / 2);
    }
  }

  getFirst() {
    if (this.isEmpty()) return null;
    return this.arr[this.start];
  }

  size() {
    return this.count;
  }

  getLast() {
    if (this.isEmpty()) return null;
    return this.arr[(this.end - 1 + this.size) % this.size];
  }

  isEmpty() {
    return this.count === 0;
  }

  isFull() {
    return this.count === this.size;
  }
}
