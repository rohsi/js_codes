var students = [
    {
        id: 1,
        name: "Rohit"
    },
    {
        id: 2,
        name: "Joe"
    },
    {
        id: 3,
        name: "Poe"
    },
    {
        id: 4,
        name: "Tom"
    },
]

var contacts = [
    {
        studentId: 2,
        mobile: "123123"
    },
    {
        studentId: 1,
        mobile: "12sdfsdf23"
    },
    {
        studentId: 8,
        mobile: "123123"
    },
    {
        studentId: 23,
        mobile: "123123"
    },

]


var students_contacts = [
    {
        name: "Rohit",
        mobile: "12sdfsdf23"
    },
    {
        name: "Joe",
        mobile: "123123"
    }
]


var students_contacts = [];
for (var i = 0; i < students.length; i++) {
    var student = students[i];
    var studentcontacts = null;
    for (var j = 0; j < contacts.length; j++) {
        var contact = contacts[j];
        if (student.id === contact.studentId) {
            studentcontacts = contact;
        }

    }


    //one way to do it.
    if (studentcontacts != null) {
        students_contacts.push({
            name: student.name,
            mobile: studentcontacts.mobile
        })

    }

}





console.log(students_contacts);







//another way to do it


for (var i = 0; i < students.length; i++) {
    var student = students[i];


    var studentcontacts = null;

    for (var j = 0; j < contacts.length; j++) {
        var contact = contacts[j];


        if (student.id === contact.studentId) {

            studentcontacts = contact;

            students_contacts.push({
                name: student.name,
                mobile: studentcontacts.mobile
            })

            break;

        }

    }




}

