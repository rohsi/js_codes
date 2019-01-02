var listOfPeople = [
    {
        name: "Amar",
        fd: 50000,
        mf: 150000
    },
    {
        name: "Bill",
        fd: 25832,
        mf: 1123
    },
    {
        name: "Cate",
        fd: 50000,
        mf: 0
    },
];
for(var i=0;i<listOfPeople.length;i++) {
    var sum=listOfPeople[i].fd+listOfPeople[i].mf;
    listOfPeople[i].totalinvestments=sum;
}
console.log(listOfPeople);