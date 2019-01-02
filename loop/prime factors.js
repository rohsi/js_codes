var num=120;
var s="";
while (num>1){
    for (var i=2;i<=num;i++){
        if (num%i===0){
            s+=" "+ i;
            num=num/i;
        }
    }
}
console.log(s);