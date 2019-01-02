function grade(marks){
    if (marks>=90){
        return  'a'
    } else if (marks>=80) {
        return 'b'
    }else if(marks>=60){
        return 'c'
    }else{
        return 'd'
    }

}
console.log(grade(70));
