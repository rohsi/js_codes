function increasingorder(a,b,c) {
if(a>b && a>c){
    if(b>c){
        return[a,b,c]
    }else{
        return[a,c,b]
    }
}
else if(b>c && b>a){
    if(c>a){
        return[b,c,a]
    }else {
        return[b,a,c]
    }
    }
else if(c>a && c>b){
    if(a>b){
        return[c,a,b]
    }else{
        return[c,b,a]
    }
}


}
console.log(increasingorder(4,3,5));
