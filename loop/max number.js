function getmax(input) {
var max=input[0];
for (var i=0;i<input.length;i++){
    if(input[i]>max){
        max=input[i];

    }

}
return max

}
console.log(getmax([1,2,3,4]));