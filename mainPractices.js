const products = [
    { id: 1, name: "Laptop", priceString: "1200.00", quantity: 2 },
    { id: 2, name: "Mouse", priceString: "25.50", quantity: 5 },
    { id: 3, name: "Monitor", priceString: "300.00", quantity: 1 }
];

// Write your processProducts Arrow Function here...
const finalReport = products.map(({name,priceString,quantity})=>{
    
    let totalPrice = Number(priceString) * quantity;
    let taxAmount = totalPrice * 0.10;
    return {name,totalPrice,taxAmount};
})
console.log(finalReport)
