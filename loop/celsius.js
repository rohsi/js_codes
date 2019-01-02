function celsius(c){
    return (c*9/5)+32;
}
function celsiustofarenheit(cs) {
    console.log("C       F");
    for (var i=1;i<=cs;i++){
        console.log(i + "    "+celsius(i));
    }
}
celsiustofarenheit(15);