
var obj = {"a":1, "b":2, "c":[1,2,3]};
var sum=0;
for(var key in obj){
        sum=sum+obj[key];


};

console.log(sum);