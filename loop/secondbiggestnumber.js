function secondbiggest(input) {
    var max=input[0];
    var second=input[1];
    for (var i=0;i<input.length;i++){
        if(input[i]>max){
            second=max;
            max=input[i];

        }else if(input[i]>second){
            second=input[i];

        }
    }
    return second
}
console.log(secondbiggest([1,7,5,3,4]));