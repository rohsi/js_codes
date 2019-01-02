var str = '';
for(var i=1; i<=5; i++){
    for(var k=1; k<=5-i; k++){
        str += "\t";
    }
    for(var j=1; j<=i; j++){
        str += "*\t\t";
    }
    console.log(str)
    str="";

}