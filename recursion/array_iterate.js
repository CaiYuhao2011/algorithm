// 递归遍历

function iterate(arr) {
    if (!arr.length) {
        return;
    }
    const [first, ...rest] = arr;
    console.log(first);
    iterate(rest);
}

console.log(iterate([1, 2, 3]));
