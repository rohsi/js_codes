

function factorial(input) {
    var product=1;
    for (var i=1;i<=input;i++){
        product*=i;
    }
return product
}
console.log(factorial(6));
console.log(factorial(5));