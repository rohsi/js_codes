function leapyear(input) {
    if (input % 4 === 0) {
        if (input % 100 === 0) {
            if (input % 400 === 0) {
                return true
            }else{
                return false
            }

        }return true




    }return false
}

console.log(leapyear(2004));