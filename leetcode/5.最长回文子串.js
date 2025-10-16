/*
 * @lc app=leetcode.cn id=5 lang=javascript
 * @lcpr version=30203
 *
 * [5] 最长回文子串
 */

// @lc code=start
function palindrome(s, l, r) {
    // 以 i 和 j 为中心的回文串
    while (l >= 0 && r < s.length && s[l] == s[r]) {
        l--;
        r++;
    }

    return s.substring(l + 1, r);
}

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let res = '';
    for (let i = 0; i < s.length; i++) {
        const s1 = palindrome(s, i, i);
        const s2 = palindrome(s, i, i + 1);
        res = res.length > s1.length ? res : s1;
        res = res.length > s2.length ? res : s2;
    }

    return res;
};
// @lc code=end



/*
// @lcpr case=start
// "babad"\n
// @lcpr case=end

// @lcpr case=start
// "cbbd"\n
// @lcpr case=end

 */

