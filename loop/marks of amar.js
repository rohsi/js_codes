var arr = [{name: 'Rohit', marks: [90, 80, 70]},
    {name: 'Mohit', marks: [90, 90, 90]}];
for (var i=0;i<arr.length;i++) {
        var sum = 0;
        var s = arr[i];
        var avg=0;
        for (var j = 0; j < s.marks.length; j++) {
            sum = s.marks[j] + sum;
            avg =sum/s.marks.length;

        }
        console.log(s.name + " scored" + sum);
        console.log(avg);

}


