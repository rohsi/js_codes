function kgtopound(pound) {
    return pound=pound*2
}
function pound(kg) {
    console.log("pound   kg || pound    kg");
    for (var i=1;i<kg;i++){
        console.log(kgtopound(i)+ "        "+  i +"||"+ kgtopound(i)+ "        "+i);

    }
}
pound(20);