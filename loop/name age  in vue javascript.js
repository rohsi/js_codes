var persons=  [
    { name: 'Max', age: 27, color: 'red' },
    { name: 'Anna', age: 'unknown', color: 'blue' }
];

for(var i=0;i<persons.length;i++){
    for( var key in persons[i]){
        console.log(key+ persons[i][key]);
    }
}