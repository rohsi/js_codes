function power(num,n) {
    var p=1;
    for (var i=0;i<n;i++){
        p*=num;
    } return p
}
console.log(power(10,3));