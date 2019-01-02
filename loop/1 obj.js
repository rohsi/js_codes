var obj=[{"name":"Amar","marks":[50,60,30]},{"name":"Birbal","marks":[40,80,65]},{"name":"Rohit","marks":[40,80,65]}];
for (var i=0;i<obj.length;i++) {
    var sum = 0;
    var s = obj[i];
    var avg=0;

    for (var j = 0; j < s.marks.length; j++) {
        sum = s.marks[j] + sum;
        avg =sum/s.marks.length;

var max=(Math.max.apply(Math,s.marks));
    }

    console.log(s.name + " scored" + sum);
    console.log(avg);
    console.log(max);
    }


