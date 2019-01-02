function nameswithuppercae(input) {
    var new_arr=[];
    for (var i=0;i<input.length;i++){
    if ( input[i][0]===input[i][0].toUpperCase()){
        new_arr.push(input[i]);
    }


    }
    return new_arr
}
console.log(nameswithuppercae(['Rohit','mohit','Pratibha']));