var results = [
    {
        rollNo: 1,
        marks: 43,
        subject: 'Science'
    },
    {
        rollNo: 1,
        marks: 37,
        subject: 'Maths'
    }, {
        rollNo: 1,
        marks: 47,
        subject: 'English'
    },
    {
        rollNo: 2,
        marks: 37,
        subject: 'Maths'
    },
]


var sum=0;
var count =0;
for(var i=0;i<results.length;i++){
    var result=results[i];
    if(result.rollNo===1){
       sum+=result.marks;
        count++
    }
}

console.log(count);