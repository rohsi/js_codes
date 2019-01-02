function sumOfArray(inputArray) {
    var sum=0;
    for (var i=0;i<inputArray.length;i++){
        sum=sum+inputArray[i];
    }
    return sum
}
console.log(sumOfArray([1,2,3]));