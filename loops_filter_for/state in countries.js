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


var states= [
    {
        id:1,
        countryId: 100,
        state: 'Maharashtra'
    },
    {
        id:2,
        countryId: 100,
        state: 'UP'
    },
    {
        id:499,
        countryId: 1,
        state: 'Texas'
    },
    {
        id:40,
        countryId: 1,
        state: 'Alaska'
    },
]

var finalResult = [
    {
        id: 100,
        name: 'India',
        states:[
            {
                id:1,
                countryId: 100,
                state: 'Maharashtra'
            },
            {
                id:2,
                countryId: 100,
                state: 'UP'
            },
        ]
    },
    {
        id: 1,
        name: 'Us',
        states:[
            {
                id:499,
                countryId: 1,
                state: 'Texas'
            },
            {
                id:40,
                countryId: 1,
                state: 'Alaska'
            }
        ]
    }
]


// var statesincountries=[];
//
// for (var i=0;i<countries.length;i++){
//     var country=countries[i];
//     var statesincountry=[];
//
//     for (var j=0;j<states.length;j++){
//         var state=states[j];
//         if(country.id===state.countryId){
//             statesincountry.push(state);
//         }
//
//     }
//     statesincountries.push({
//         id:country.id,
//         name:country.name,
//         states:statesincountry
//
//     })
// }
//
// console.log(JSON.stringify(statesincountries, null, 4));




var q2= [
    {
        id:1,
        countryName: "India",
        state: 'Maharashtra'
    },
    {
        id:2,
        countryName: "India",
        state: 'UP'
    },
    {
        id:499,
        countryName: "Us",
        state: 'Texas'
    },
    {
        id:40,
        countryName: "Us",
        state: 'Alaska'
    },
]


var q2=[];


for (var i=0;i<states.length;i++){
    var state=states[i];

    var statescountry=[];
    for(var j=0;j<countries.length;j++) {

        var country = countries[j];
        if (state.countryId === country.id) {
            statescountry.push(country);
        }
    }

    q2.push({
        id:state.id,
        countryName:statescountry[0].name,
        state:state.state
    })
}
console.log(q2);