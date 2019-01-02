var str={'a':1,'b':2,'c':[1,2,3]};
for (key in str){
   if(key=='c'){
       var arr=str.c
       var sum=0;
       for(var i=0;i<arr.length;i++){
           sum=sum+arr[i];
       }
       }else {
       console.log(str[key]);
   }

}
console.log(sum);