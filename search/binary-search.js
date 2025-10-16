// 二分查找
function binarySearch(nums, target) {
    let left = 0;
    let right = 0;
    while (left <= right) {
        const mid = ((left + right) >>> 1) | 0;
        if (nums[mid] == target) {
            return mid;
        } else if (nums[mid] > target) {
            right = mid - 1;
        } else if (nums[mid] < target) {
            left = mid + 1;
        }
    }

    return -1;
}
