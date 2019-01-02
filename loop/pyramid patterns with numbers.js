for(var i=1;i<=10;i++){
    var output="";
    for (var j=i;j<10;j++){
        output+=" ";
    }
    for (j=1;j<=(2*i-1);j++){
        output+="*";
    }

console.log(output);
}