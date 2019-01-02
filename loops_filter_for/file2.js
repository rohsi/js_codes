
var persons = [
    {
        name: "Mohit",
        age: 25,

    },
    {
        name: "Rohit",
        age: 30,

    },
    {
        name: "Pratibha",
        age: 60,

    }
];
var arr = [];
for (var i = 0; i < persons.length; i++) {
    var student = persons[i];
    if (student.age <= 27) {
        arr.push(student);
    }
}
console.log(arr);

var rebels = persons.filter(person => person.age <= 27);

console.log(rebels);


var rebels2 = persons.filter(function (person) {
    return person.age <= 27;
});
console.log(rebels2);

function agelesser() {
    var re = persons.filter(function (elder) {
        return elder.age <= 27;

    })
    return re
};

console.log(agelesser());
