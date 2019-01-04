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
    },
    {
        rollNo: 3,
        name: "Ram",
        class: 1
    }
]


var books = [
    {
        rollNo: 1,
        title: 'Tinkle'
    },
    {
        rollNo: 1,
        title: 'Champak'
    },
    {
        rollNo: 1,
        title: 'Phantom'
    },
    {
        rollNo: 2,
        title: 'Gokulam'
    },
    {
        rollNo: 2,
        title: 'Chandamama'
    },
]


var q1 = [
    {
        books: [
            {
                rollNo: 1,
                title: 'Tinkle'
            },
            {
                rollNo: 1,
                title: 'Champak'
            },
            {
                rollNo: 1,
                title: 'Phantom'
            }
        ],
        rollNo: 1,
        name: "Amar",
    },
    {
        rollNo: 2,
        books: [
            {
                rollNo: 2,
                title: 'Gokulam'
            },
            {
                rollNo: 2,
                title: 'Chandamama'
            },
        ],
        name: "Joe",
    },
    {
        books: [],
        name: 'Ram',
        rollNo: 3
    }
]

/*



   Informaition storing

   var q1=[]


   for students - > student

       Information storing
       var booksReadByStudent = []

       for books -> book
           check if that book belongs to student
                  add that book entry to booksReadByStudent



        We have all the knowledge now.

        Let's store it in our information store


        q1.push(something)


 */

var q1=[];

for (var i=0;i<students.length;i++){
    var student=students[i];
    var booksreadbystudent=[];
    for (var j=0;j<books.length;j++){
        var book=books[j];
        if(student.rollNo===book.rollNo){
            booksreadbystudent.push(book)
        }
    }
    q1.push({
        books: booksreadbystudent,
        name:student.name,
        rollNo:student.rollNo
    })
}

console.log(JSON.stringify(q1, null, 4));


var q2 = [
    {
        student: 'Amar',
        rollNo: 1,
        title: 'Tinkle',
    },
    {
        student: 'Amar',
        rollNo: 1,
        title: 'Champak',
    },
    {
        rollNo: 1,
        title: 'Phantom',
        student: 'Amar'
    },
    {
        rollNo: 2,
        title: 'Gokulam',
        student: 'Joe'
    },
    {
        rollNo: 2,
        title: 'Chandamama',
        student: 'Joe'
    },
]

var q2=[];
for (var i=0;i<books.length;i++){
    var book=books[i];
    var bookspossessedbystudent=[];
    for (var j=0;j<students.length;j++){
        var student=students[j];
        if (book.rollNo===student.rollNo){
            bookspossessedbystudent.push(student);
        }
    }
    q2.push({
        student:student.name,
        title:book.title,
        rollNo:book.rollNo
    })
}
/*


 Information store


 var q2 = []


 for books -> book


    Information store, we aren't using an array for this info store, because there will be only one student who will possess that book.
    So no need for an array

    var stud = null;


    for students-> student

        if rollno== students.rollno

            Found that information, let's store it.
            stud = student


    We have all the knowledge we need, lets not lose it.

    q2.push(something)

 */



console.log(JSON.stringify(q2, null, 4));
