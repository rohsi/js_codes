

var sum =0;
var count =0;
var countOddNos = 0;
var productOfOddNos = 1;


for (var i = 0; i < 100; i++) {
    if( i%2==0){
        // information store
        count ++;
        sum+=i;
    }else{
        productOfOddNos*=i;
        countOddNos++;
    }

}


