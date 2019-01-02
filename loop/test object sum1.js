var obj={
    name:"TEST",
    data: [1,2,3,4]
};
for(var key in obj) {
if(key==='data') {
    var arr = obj.data
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum = sum + arr[i];

    }
    console.log(sum);
}
         else {
            console.log(obj[key]);
        }

}
