function firstfactor(num) {

    for (var i = 2; i <= num; i++) {
        if (num % i === 0) {
            return i
        }
    }

}
var n=120;
var s="";
   while (n>1){
    var first=firstfactor(n);

       s+=" " + first;



    n=n/first;
   }

console.log(s);