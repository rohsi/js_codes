var smoothies = [
    {
        title: "Smoothie 1", ingredients: [
            "banana", "mango"
        ]
    },
    {
        title: "Smoothie 2", ingredients: [
            "strawberry", "mango"
        ]
    }
]

for (var i = 0; smoothies.length; i++) {
    var s = smoothies[i];
    for (var j = 0; j < s.length; j++) {
        var k = s.ingredients[j];
    }
    console.log(k);
}
