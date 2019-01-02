for (var key in quantities) {
    sum = sum + quantities[key] * prices[key]
}
var ingredientswithPrice={
    bacon:1,
    cheese:2,
    meat:1.7
};
var sum=0;
for (var i=1;i<=5;i++){
    sum+=sum+ ingredientswithPrice[0]*i+ingredientswithPrice[1]*i+ingredientswithPrice[2]*i;
}
console.log(sum);