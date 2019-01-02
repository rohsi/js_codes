function prime(num) {
    for (var i=2;i<num;i++){
        if(num%i===0){
            return false
        }
    }
    return true
}
console.log(prime(9));

function primenos(num) {
    for (var i=1;i<101;i++){
        if(prime(i)){
            console.log(i);
        }
    }

}
console.log(primenos());