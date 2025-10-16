/*
 * @lc app=leetcode.cn id=167 lang=javascript
 * @lcpr version=30203
 *
 * [167] 两数之和 II - 输入有序数组
 */

// @lc code=start
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    // 滑动窗口
    let left = 0;
    let right = numbers.length - 1;
    while (left < right) {
        const sum = numbers[left] + numbers[right];
        if (sum == target) {
            return [left + 1, right + 1];
        } else if (sum < target) {
            left++;
        } else if (sum > target) {
            right--;
        }
    }

    return [-1, -1];
};


// @lc code=end



/*
// @lcpr case=start
// [2,7,11,15]\n9\n
// @lcpr case=end

// @lcpr case=start
// [2,3,4]\n6\n
// @lcpr case=end

// @lcpr case=start
// [-1,0]\n-1\n
// @lcpr case=end

 */

