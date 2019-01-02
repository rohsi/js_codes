var teams = [
    {
        name: "Man Utd",
        coach: "ABC",
        year: 1850

    },
    {
        name: "Real Madrid",
        coach: "ABC",
        year: 1920
    },
    {
        name: "Liverpool",
        coach: "ABC",
        year: 1800
    }
]

// var arr = [];
// for (var i = 0; i < teams.length; i++) {
//     var s = teams[i];
//     if (s.year <= 1900) {
//         arr.push(s);
//     }
// }
// console.log(arr);


function man(input) {
    var small = teams.filter(function (team) {
        return team.year <= input;
    });
    return small
}
console.log(man(2000));

