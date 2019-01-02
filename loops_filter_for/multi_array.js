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

var q1 = [
    {
        rollNo: 1,
        name: "Amar",
        class: 6,
        marks: [
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
            }
        ],
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
        marks: [
            {
                studentId: 2,
                activity: "gymnastic"
            }, {
                studentId: 2,
                activity: "dance"
            }

        ],
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
var q1 = [];
for (var i = 0; i < students.length; i++) {
    var student = students[i];


    //accumulate all results of student
    var studentMarks = []
    for (var j = 0; j < results.length; j++) {
        var result = results[j];
        if (student.rollNo === result.rollNo) {
            studentMarks.push(result)
        }
    }

    var sportofstudent=[]
    for (var k = 0; k < sports.length; k++) {
        var sport = sports[k];
        if (student.rollNo === sport.studentId) {
          sportofstudent.push(sport)
        }
    }
    q1.push({
        rollNo: student.rollNo,
        name: student.name,
        class: student.class,
        marks: studentMarks,
        sport: sportofstudent
    }

)


}
console.log(q1[0]);