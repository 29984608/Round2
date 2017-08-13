
function Number(arr) {
    arr.sort((x,y) => x - y);
    if (arr.length % 2 === 0){
        return (arr[arr.length / 2]+arr[arr.length / 2 - 1]) / 2;
    }
    return arr[Math.floor(arr.length /2)];
}

console.log('[2,2,3,6,8]中位数：'+Number([9, 6, 7, 8, 10]));
console.log('[5,4,2,1]中位数：'+Number([9, 6, 7, 8]));
