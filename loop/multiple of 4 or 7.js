function multipleof4or7(input) {
    var arr=[];
    for (var i=0;i<input.length;i++){
        if(input[i]%4===0 || input[i]%7===0){
            arr.push(input[i]);
        }
    }
    return arr

}
console.log(multipleof4or7([4,7,8,3,12]));