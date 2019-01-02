var testData= {
    name: 'TESTOBJECT',
    data: [1.67, 1.33, 0.98, 2.21]
};

    for (var key in testData) {
if(key==='name') {
    console.log(testData[key]);
}else{
    var arr=testData.data
    for (var i=0;i<arr.length;i++){
        console.log(arr[i]);
    }
}
}


