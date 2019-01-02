var matches = [
    {
        "stadium": "MCG",
        "score": {

            run: 195
        }
    },
    {
        "stadium": "SCG",
        "score": {

            run: 78
        }
    }
]
var sum = 0;
for (var i = 0; i < matches.length; i++) {
    var s = matches[i];
    sum += s.score.run;
    console.log(sum);
}
