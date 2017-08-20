function mostFrequently(str) {
    var array = str.split("");
    var setArray = Array.from(new Set(array));
    var result = statisticNumber(setArray, array);
    var max = findTheMaximum(result);
    var data = obtainedMaxNumber(result, max);

    return data;
}

function statisticNumber(setArray, array) {
    var result = [];

    setArray.filter(data => {
        result.push({key: data, count: (array.filter(item => item === data)).length});
    });

    return result;
}

function findTheMaximum(result) {
    var max = 0;

    result.forEach(item => {
        if (item.count >= max) {
            max = item.count;
        }
    });

    return max;
}

function obtainedMaxNumber(result, max) {
    var data = {};

    result.forEach(item => {
        if (item.count === max) {
            data[item.key] = item.count;
        }
    });

    return data;
}
console.log(mostFrequently("abcsbaddbizdbas"));
console.log(mostFrequently("aaaaabbdbdbb"));