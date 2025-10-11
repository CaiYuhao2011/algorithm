// 数组反转

function recursion(arr) {
    if (!arr.length) {
        return [];
    }
    const [first, ...rest] = arr;
    return [...recursion(rest), first];
}

function reverseArray(arr) {
    return recursion(arr);
}

console.log(reverseArray([1, 2, 3]));
