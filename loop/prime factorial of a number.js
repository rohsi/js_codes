function firstfactors(num) {
    for (var i=2;i<=num;i++){
        if (num%i===0){
            return i;

        }
    }

}


var num =120;

while(num>1) {

    var first = firstfactors(num);
    console.log(first);
    num = num / first;

}