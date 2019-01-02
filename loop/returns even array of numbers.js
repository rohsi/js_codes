function getevennumbers(inputarr) {
    var new_array=[];
    for (var i=0;i<inputarr.length;i++){
        if(inputarr[i]%2==0){
            new_array.push(inputarr[i]);
        }
    }
    return new_array;
}

console.log(getevennumbers([1,2,4,6,7]));