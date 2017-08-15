function item(arr, items) {
    return arr.filter(element  => element === items).length;
}

arr = [1, 3, 7, 1, 4];
items = 1;
console.log('[1, 3, 7, 1, 4]中 1 的个数：'+item(arr, items));