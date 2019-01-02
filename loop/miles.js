function miletokm(mile) {
    return mile*1.6;
}
function miles(miles) {
    console.log(" km    miles")
    for (var i=1;i<=miles;i++){
        console.log(i+"    " + miletokm(i));
    }
}
miles(15);