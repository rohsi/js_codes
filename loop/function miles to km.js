function milesconvertedtokm(miles) {

    return 1.6*miles

}


function printmileskm(){

    console.log("Miles Km")
    for(var i=1;i<=10;i++){
        console.log(i+ "    "+ milesconvertedtokm(i))
    }
}
printmileskm(1)