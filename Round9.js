function squareNumber(arr) {

    var newArray=arr.map( element =>
        Math.pow(element,2)
   );
   return newArray;
    
}

console.log("([5, 3, 7, 1]) --> " + squareNumber([5, 3, 7, 1]));