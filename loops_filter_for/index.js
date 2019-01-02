var persons2 = [
    {
        name: "Mohit",
        age: 25,
        id: 'abc'

    },
    {
        name: "Rohit",
        age: 30,
        id: 'cde'

    },
    {
        name: "Pratibha",
        age: 60,
        id: 'xyz'
    }
]
var arr = [];

var idToBeRemoved = 'xyz'
for (var i = 0; i < persons2.length; i++) {
    var s = persons2[i];
    if (s.id != idToBeRemoved) {
        arr.push(s);
    }



}
console.log(arr);

var filteredPersons = persons2.filter(function (person) {
    return person.id != idToBeRemoved;
});

console.log(filteredPersons);

function removeId(identity) {
    var filteredPersons = persons2.filter(function (person) {
        return person.id != identity;
    });
    return filteredPersons
}




console.log(removeId('abc'));
