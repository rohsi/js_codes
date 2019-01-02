var countries = [
    {
        name: 'India',
        capital: 'Delhi',
        states: [{
            name: 'Maharashtra',
            capital: 'Mumbai'
        },
            {
                name: 'Bihar',
                capital: 'Patna'
            }]
    }
]
for (var i = 0; i < countries.length; i++) {
    var c = countries[i];
    for (var j = 0; j < c.states.length; j++) {
        console.log(c.name + c.states[j].name + c.states[j].capital);
    }
}