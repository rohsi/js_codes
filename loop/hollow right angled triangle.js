for (var i=1;i<=5;i++){
    var output="";
    for (var j=1;j<=i;j++){
        if(j===1 || j===i || i===5 ){
            output +="*";
        }else {
            output += " ";
        }

    }
    console.log(output);
}
