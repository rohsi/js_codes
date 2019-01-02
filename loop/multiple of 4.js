function multipleof4(input) {
    var arr=[];
    for(var i=0;i<input.length;i++){
        if(input[i]%4===0){
            arr.push(input[i])
        }
    }
    return arr
}
console.log(multipleof4([4,8,12,15]));