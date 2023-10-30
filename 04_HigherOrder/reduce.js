 const myNums = [1,2,3,4,5,6]

//  const myTotal = myNums.reduce(function (acc, currVal) {
//     console.log(`Accumulator: ${acc} and Current Value: ${currVal}`);
//     return acc + currVal
//  }, 0 )
//  console.log(myTotal);

 const myTotal = myNums.reduce( (acc, currVal) => acc + currVal, 0)
 console.log(myTotal);

 const shoppingCart = [
    {
        itemName: "js course",
        price: 999
    },
    {
        itemName: "python course",
        price: 999
    },
    {
        itemName: "java course",
        price: 999
    },
    {
        itemName: "ruby course",
        price: 999
    },
    {
        itemName: "data science course",
        price: 19999
    },
 ]
 const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0 )
 console.log(priceToPay);