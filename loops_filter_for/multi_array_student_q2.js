var students = [
    {
        rollNo: 1,
        name: "Amar",
        class: 6
    },
    {
        rollNo: 2,
        name: "Joe",
        class: 9
    }
]

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

var sports = [
    {
        studentId: 1,
        activity: "football"
    }, {
        studentId: 1,
        activity: "cricket"
    }, {
        studentId: 1,
        activity: "chess"
    }, {
        studentId: 2,
        activity: "gymnastic"
    }, {
        studentId: 2,
        activity: "dance"
    },
]

/*

The input arrays are same. but question is modified.
i need the final result with percentage calculated.

Assume max marks for subject is 100
var q2 = [
    {
        rollNo: 1,
        name: "Amar",
        class: 6,
        percentage: 42.33,
        sports: [
            {
                studentId: 1,
                activity: "football"
            }, {
                studentId: 1,
                activity: "cricket"
            }, {
                studentId: 1,
                activity: "chess"
            }
        ]
    }
    , {
        rollNo: 2,
        name: "Joe",
        class: 9,
        percentage: 37,
        sports: [
            {
                studentId: 2,
                activity: "gymnastic"
            }, {
                studentId: 2,
                activity: "dance"
            }
        ]
    }
]
*/
var q2=[];
for(var i=0;i<students.length;i++){
    var student=students[i];
    var resultofStudent=[];
    var sum=0;
    for(var j=0;j<results.length;j++){
        var result=results[j];

        if(student.rollNo===result.rollNo){
            resultofStudent.push(result);
            sum+=result.marks;
        }
    }
    var percentage=sum/resultofStudent.length;
    var sportplayedbystudent=[];
    for(var z=0;z<sports.length;z++){
        var sport=sports[z];
        if(student.rollNo===sport.studentId){
            sportplayedbystudent.push(sport);

        }
    }

    q2.push({
        rollNo:student.rollNo,
        name:student.name,
        class:student.class,
        percentage:percentage,
        sport:sportplayedbystudent
    })
}

console.log(q2);


