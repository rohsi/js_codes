var obj={
    name:"TEST",
    data: [1,2,3,4]
};

for(var key in obj){
    if(key==='name'){
        console.log(obj[key]);
    }else{
        var arr=obj.data

        for(var i=0;i<arr.length;i++){
            console.log(arr[i]);
        }

    }
}

