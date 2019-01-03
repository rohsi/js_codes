var people=[
    {
        name:'Akbar',
        marks:20
    },
    {
        name:'Akbar',
        marks:50
    }
]

var sum=0;
for (var i=0;i<people.length;i++){
    var person=people[i];
    sum+=person.marks;
}
var percentage=(sum/people.length);

console.log(percentage);