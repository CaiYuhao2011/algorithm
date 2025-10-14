/*
 * @lc app=leetcode.cn id=264 lang=javascript
 * @lcpr version=30203
 *
 * [264] 丑数 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
    let p2 = 1;
    let p3 = 1;
    let p5 = 1;
    let p = 1;
    let num2 = 1;
    let num3 = 1;
    let num5 = 1;

    const ugly = [];

    while(p <= n) {
        let min = Math.min(num2, Math.min(num3, num5));
        ugly[p] = min;
        p++;
        // 这里 if 不可改成 if else，指针后移还有一个作用就是去除重复数字
        if (num2 == min) {
            num2 = 2 * ugly[p2];
            p2++;
        }
        if (num3 == min) {
            num3 = 3 * ugly[p3];
            p3++;
        }
        if (num5 == min) {
            num5 = 5 * ugly[p5];
            p5++;
        }
    }

    return ugly[n];
};
// @lc code=end



/*
// @lcpr case=start
// 10\n
// @lcpr case=end

// @lcpr case=start
// 1\n
// @lcpr case=end

 */

