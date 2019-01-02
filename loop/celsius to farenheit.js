function celsiustof(celsius) {
    return (celsius*9/5)+32;
}
function celsius(s) {
    console.log("c    f" )
    for (var i =1;i<=s;i++){
        console.log(i +"  "+ celsiustof(i));
    }

}
celsius(200);