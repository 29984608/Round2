function sameElement(arr) {
    var newArr = arr.filter((elem, index) => arr.indexOf(elem) !== index);

    return newArr;
}

console.log("sameElement(['a', 'ab', 'ed', 'da', 'a', 'ed', 'b']) --> " + sameElement(['a', 'ab', 'ed', 'da', 'a', 'ed', 'b']));