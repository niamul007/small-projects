const products = [
    { id: 101, name: "Laptop", category: "Electronics", price: 1200 },
    { id: 102, name: "Mouse", category: "Electronics", price: 25 },
    { id: 103, name: "T-Shirt", category: "Apparel", price: 30 },
    { id: 104, name: "Jeans", category: "Apparel", price: 80 },
    { id: 105, name: "Monitor", category: "Electronics", price: 300 }
];

function updateProductPrice(arr,id,newPrice){
    let newer = arr.map(item=>{
        if(item.id === id){
            return {...item, price:newPrice};
        }else{
            return item;
        }
    })
    return newer;
}

console.log(updateProductPrice(products,101,1500));
console.log(products)

const usingDes = products.filter(item=> item.category === "Electronics").map(({name,price})=> `${name} - ${price}`);
// console.log(usingDes)

function getProductNames(arrOfObj){
    let newArr = arrOfObj.map(item=>{
        return item.name;
    })
    return newArr;
}
// console.log(getProductNames(products))



function getHighValueProducts(highVal){
    let value = highVal.filter((item)=> item.price > 100).map(item=> item.name);
    return value;
}
// console.log(getHighValueProducts(products));


function calculateTotalValue(total){
    let sum = total.reduce((acc,curr)=>{
        return acc += curr.price;
    },0);
    return sum;
}
// console.log(calculateTotalValue(products));



const scores = {
    Alice: 85,
    Bob: 62,
    Charlie: 91,
    David: 68,
    Eve: 75
};
let obj = Object.keys(scores).filter(key => scores[key] >= 70);
// console.log(obj)



// i struggle this for a lot i tried to use filter and map bu t thinking about the ourpu you dont want it to be an arry 
function createSummary(product){
    for (let i = 0; i < product.length; i++){
        if(product[i].price > 1000){
            return ` ${product[i].name} is a premium product`
        }else{
            return ` ${product[i].name} is a standard product`
        }
    }
}
// console.log(createSummary(products));



