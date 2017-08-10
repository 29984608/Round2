function  findNum(arr) {
    return arr.filter( element => {
        return arr.filter( item => element === item).length === 1;
    })
}
console.log(findNum([1,2,3,4,3,1,2,4,0]));
    
