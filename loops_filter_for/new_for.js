var arr = [
    {
        name: "Sehwag",
        matches: [
            {
                "stadium": "MCG",
                "score": 195
            },
            {
                "stadium": "SCG",
                "score": 47
            }
        ]

    }, {
        name: "Sachin",
        matches: [
            {
                "stadium": "MCG",
                "score": 12
            },
            {
                "stadium": "SCG",
                "score": 67
            },
            {
                "stadium": "Mumbai",
                "score": 167
            }
        ]

    }

];

for (var i = 0; i < arr.length; i++) {
    var s = arr[i];
    var sum = 0;
    var avg = 0;
    for (var j = 0; j < s.matches.length; j++) {
        var k = s.matches[j];




















        sum += k.score;



        avg = sum / s.matches.length;



























    }
    console.log(s.name + sum);
    console.log(avg);
}