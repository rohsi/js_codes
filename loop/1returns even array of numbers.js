function getevennumbers(input) {
    var arr_new=[];
    for(var i=0;i<input.length;i++){
        if(input[i]%2==0){
            arr_new.push(input[i]);
        }
    }
    return arr_new
}
console.log(getevennumbers([1,2,8,6,3]));