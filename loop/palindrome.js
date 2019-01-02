function palindrome(input) {
   var k=input%10;
   var z=parseInt(input/10);
   var y=z%10;
   var a=parseInt(z/10);
   var b=a%10;
   var reverse=k*100+y*10+b;
   if(input==reverse){
       return true
   }else {
       return false
   }
}
console.log(palindrome(125));