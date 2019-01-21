var stock=[
    {id:1,name:'Google',price:100},
    {id:2,name:'BMW',price:12}
]

var quantity=[
    {id:2,qty:15},
    {id:1,qty:5}


]

var stockqua=[];
for(var i=0;i<quantity.length;i++){
    var stoc=quantity[i];
    var r=null;
    for (var z=0;z<stock.length;z++){

        var q=stock[z];

        if(stoc.id===q.id){


        r=q;
        }
    }


    stockqua.push({

         id:stoc.id,
         quantity:stoc.qty,
        name:r.name,
         price:r.price

     })
}
 console.log(stockqua);



