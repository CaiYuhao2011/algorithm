/*
 * @lc app=leetcode.cn id=283 lang=javascript
 * @lcpr version=30203
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    function removeElement(nums, val) {
        let slow = 0;
        let fast = 0;
        while(fast < nums.length) {
            if (nums[fast] != val) {
                nums[slow] = nums[fast];
                slow++;
            }
            fast++;
        }

        return slow;
    }

    let k = removeElement(nums, 0);
    let p = k;
    for(;p < nums.length; p++) {
        nums[p] = 0;
    }

    return k;
};
// @lc code=end



/*
// @lcpr case=start
// [0,1,0,3,12]\n
// @lcpr case=end

// @lcpr case=start
// [0]\n
// @lcpr case=end

 */

