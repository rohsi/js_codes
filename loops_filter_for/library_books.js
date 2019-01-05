var people = [
    {
        name: "Amar",
        age: 29,
        libraryId: 1
    },
    {
        name: "Akbar",
        age: 33,
        libraryId: 2
    },
    {
        name: "Anthony",
        age: 29,
        libraryId: null
    }
]

var library = [
    {
        id: 1,
        name: "Public Library"
    },
    {
        id: 2,
        name: "Private Library"
    }
]

var books = [
    {
        name: "Panchatantra",
        libraryId: 1
    },
    {
        name: "Jakata Tales",
        libraryId: 1
    },
    {
        name: "Harry Potter",
        libraryId: 2
    },
]

var q1 = [
    {
        name: "Amar",
        library: "Public Library",
        books: [
            {
                name: "Panchatantra",
                libraryId: 1
            },
            {
                name: "Jakata Tales",
                libraryId: 1
            }
        ]
    },
    {
        name: "Akbar",
        library: "Private Library",
        books: [
            {
                name: "Harry Potter",
                libraryId: 2
            }
        ]
    },
    {
        library: null,
        name: "Anthony",
        books: []
    }
]

// for people
// 	person
//
//     var personslibrary
// 	for library
// 		after checking will store it in personslibrary
//
//     var booksinlibrary
//     for
//
var q1 = [];
for (var i = 0; i < people.length; i++) {
    var person = people[i];
    var personinlibrary = null;
    for (var z = 0; z < library.length; z++) {
        var onelibrary = library[z];

        if (person.libraryId === onelibrary.id) {
            personinlibrary = onelibrary;
        }
    }


    var booksforperson = [];
    for (var j = 0; j < books.length; j++) {
        var book = books[j];
        if (person.libraryId === book.libraryId) {
            booksforperson.push(book);
        }
    }


    //
    // First way to handle null personinlibrary


    if (personinlibrary == null) {

        q1.push({
            name: person.name,
            library: null,
            books: booksforperson
        })

    } else {

        q1.push({
            name: person.name,
            library: personinlibrary.name,
            books: booksforperson
        })
    }


    // Second way to handle null personinlibrary


    var nameOfLibrary = null;
    if (personinlibrary != null) {
        nameOfLibrary = personinlibrary.name
    }


    q1.push({
        name: person.name,
        library: nameOfLibrary,
        books: booksforperson
    })


    // Third way to handle null personinlibrary

    q1.push({
        name: person.name,
        library: personinlibrary == null ? null : personinlibrary.name,
        books: booksforperson
    })

}

console.log(JSON.stringify(q1, null, 4));


/*

for people-> person


    I need to store information for library name, and all the books in the library

    So I need two info stores here


    var libraryName = null
    var booksInThatLibrary = []

    for libraries -> library

        check if person goes to that library

            libraryName = library.name , we are storing the information as we won't get another chance to store it.


            for books -> book
                check if book belongs to that library
                    add it to the booksInThatLibrary



    q1.push({

        person.name,
        libraryName,
        booksInThatLibrary
    })

 */

for (var i = 0; i < people.length; i++) {
    var person = people[i];


    var libraryname = null;
    var booksinthatlibrary = [];

    for (var j = 0; j < library.length; j++) {
        var onelibrary = library[j];
        if (person.libraryId === onelibrary.id) {
            libraryname = onelibrary;
        }
        for (z = 0; z < books.length; z++) {
            var book = books[z];
            if (person.libraryId === book.libraryId) {
                booksinthatlibrary.push(book);
            }
        }
    }

    q1.push({

        name: person.name,
        library: libraryname == null ? null : libraryname.name,
        books: booksinthatlibrary
    })

}
console.log(q1);