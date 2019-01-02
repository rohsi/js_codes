function bmi(ft,po) {
    var bmi=po/(ft);
    return bmi
}
function fa(ft,po) {

var bm=bmi(ft,po);
    if (bm <30) {
        return "thin"
    } else if (bm > 30) {
        return "obese"
    }

}

console.log(fa(6.8,192));