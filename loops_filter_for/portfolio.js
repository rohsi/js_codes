var stocks=[
    {id:1, name:"Google", price:10},
    {id:2, name:"Apple", price:20},
    {id:3, name:"Netflix", price:33},
]

var portfolios=[
    {id:1, qty:10},
    {id:2, qty:15}
]
/*
This should be made finally
var showPortfolio=[
    {id:1, qty:10,name:'Google', price:10},
    {id:2, qty:15, name: 'Apple', price:20}

]
 */

var showportfolios=[];
for(var i=0;i<portfolios.length;i++){

    var portfolio=portfolios[i];


    var portfoliostocks=null;

    for (var j=0;j<stocks.length;j++){
        var stock=stocks[j];
        if(portfolio.id===stock.id){
            portfoliostocks=stock;

        }
    }

    showportfolios.push({
        id:portfolio.id,
        qty:portfolio.qty,
        name: portfoliostocks.name,
        price: portfoliostocks.price


    })
}

console.log(showportfolios);


























var showPortfolio=[];

for (var i=0;i<portfolios.length;i++){
    var portfolio=portfolios[i];


    // our aim is to find the stock corresponding to the  portfolio
    // we don't need an array because there will be only 1 stock entry corresponding  portfolio
    // hence we can even stop looking after we find the stock . hence using break
    var stockCorrespondingToEntry=null;
    for(var j=0;j<stocks.length;j++){
        var stock = stocks[j];

        if(stock.id==portfolio.id){
            stockCorrespondingToEntry= stock;
            break;
        }
    }

    showPortfolio.push({
        id:portfolio.id,
        qty: portfolio.qty,

    })

}
console.log(showPortfolio);