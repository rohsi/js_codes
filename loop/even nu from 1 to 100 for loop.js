function primenumber(num) {


    for (var i = 2; i <= 100; i++) {
        if (i%num === 0) {
            return false

        }

    }
    return true
}
console.log(primenumber());