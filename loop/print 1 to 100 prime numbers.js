function even(num) {


    if (num % 2 === 0) {
        return true
    }
    return false
}

console.log(even(13));

function print() {
 for (var i=1;i<101;i++){
     if (even(i)){
         console.log(i)
     }
 }
}
print();