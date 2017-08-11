function linkedList(str, val) {
    var linked = str;
    var linkedArray = linked.split('->');

    return linkedArray.filter(item => parseInt(item) !== val).join('->');
}

var str = '1->2->3->3->4->5->3';
var val = 3;
console.log(linkedList(str, val));