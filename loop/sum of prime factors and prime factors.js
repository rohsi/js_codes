var num=120;
var sumOfPrimeFactors = 0;
var s="Prime";
while (num>1){
    for (var i=2;i<=num;i++){
        if (num%i===0){
            s+="  "+ i;
            num=num/i;
            sumOfPrimeFactors = sumOfPrimeFactors + i;
            break;
        }

    }
}
console.log(s);