数组扁平化
    const arr = [1, [2, [3, [4, 5]]], 6];
    // => [1, 2, 3, 4, 5, 6]


-- flat()

-- 利用正则
    const res3 = JSON.parse('[' + JSON.stringify(arr).replace(/\[|\]/g, '') + ']');
    const res2 = JSON.stringify(arr).replace(/\[|\]/g, '').split(',');

-- reduce()

-- 函数递归
    const res5 = [];
    const fn = arr => {
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
        fn(arr[i]);
        } else {
        res5.push(arr[i]);
        }
    }
    }
    fn(arr);


