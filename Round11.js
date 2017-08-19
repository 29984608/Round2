function Cancelduplicate(arr) {
    return Array.from(new Set(arr));
}
console.log(Cancelduplicate( ['s','a','s','b','a',1,'1',1] ));
