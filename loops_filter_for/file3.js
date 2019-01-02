var smoothies = [
    {
        name: "Smoothie 1",
        ingredients: ["apple"],
        id: 1

    },
    {
        name: "Smoothie 2",
        ingredients: ["banana"],
        id: 2

    },
    {
        name: "Smoothie 3",
        ingredients: ["mango"],
        id: 15

    },
]
var arr = [];
var nameremoved = 'Smoothie 3'
for (var i = 0; i < smoothies.length; i++) {
    var smoo = smoothies[i];
    if (smoo.name != nameremoved) {
        arr.push(smoo);
    }
}
console.log(arr);


function Smoothie(input) {
    var sweetner = smoothies.filter(function (Smoothie) {
        return Smoothie.name != input;
    });
    return sweetner
}
console.log(Smoothie("Smoothie 2"));