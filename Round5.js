function Number() {
    var arr=[];
    for(var i=0;i<10;i++){
        for(var j=0;j<10;j++){
            for(var n=0;n<10;n++){
                if( i*i*i + j*j*j + n*n*n === 100*i + 10*j + 1*n){
                    arr.push(100*i + 10*j + 1*n);
                }
            }
        }
    }
    return arr;
    
}
console.log(Number());