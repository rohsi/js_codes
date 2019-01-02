function sumofarray(input) {
    var sum=0;
    for (var i=0;i<input.length;i++){
        sum=sum+input[i];
    }
    return sum
}
console.log(sumofarray([1,9,10]));