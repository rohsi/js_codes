var countries = [
    {
        id: 100,
        name: 'India'
    },
    {
        id: 1,
        name: 'Us'
    }
]


var states = [
    {
        id: 1,
        countryId: 100,
        state: 'Maharashtra'
    },
    {
        id: 2,
        countryId: 100,
        state: 'UP'
    },
    {
        id: 499,
        countryId: 1,
        state: 'Texas'
    },
    {
        id: 40,
        countryId: 1,
        state: 'Alaska'
    },
]


var finalResult = [
    {
        id: 1,
        countryId: 100,
        state: 'Maharashtra',
        country: {
            id: 100,
            name: 'India'
        }
    },
    {
        id: 2,
        countryId: 100,
        state: 'UP',
        country: {
            id: 100,
            name: 'India'
        }
    },
    {
        id: 499,
        countryId: 1,
        state: 'Texas',
        country: {
            id: 1,
            name: 'Us'
        }
    },
    {
        id: 40,
        countryId: 1,
        state: 'Alaska',
        country: {
            id: 1,
            name: 'Us'
        }
    },
]

var finalResult = []

for (var i = 0; i < countries.length; i++) {
    var country = countries[i];
    var statesToAdd = []
    for (var j = 0; j < states.length; j++) {
        var state = states[j];
        if (country.id === state.countryId) {
            statesToAdd.push(state)
        }
    }
    console.log(country.name, statesToAdd)
    finalResult.push({
        id: states.id,
        states: statesToAdd,
        name: country.name,
        id: country.id

    })
}
console.log(finalResult);