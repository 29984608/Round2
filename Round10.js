function positionNum(arr,items) {
    var result =[];

    arr.filter((element,index) => {
        if(element === items)
            result.push(index);
    });

    return result;
}
arr = [1, 3, 7, 1 ,4,]
items = 1
console.log("[1, 3, 7, 1, 4]中1元素的下标 --> "+positionNum(arr,items));
