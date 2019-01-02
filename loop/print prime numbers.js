function prime(num) {
    for(var i=2;i<num;i++){
        if(num%i===0){
            return false
        }
    }
    return true
}
console.log(prime(5));

function printprimenumber(range) {
    for (var i=1;i<=100;i++){
        if(prime(i)){
            console.log(i);
        }
    }
}
console.log(printprimenumber(100));