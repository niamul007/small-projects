// Use this object for your test:
const sampleProduct = { 
    id: 101, 
    name: "Laptop", 
    category: "Electronics", 
    price: 1200 
};

const {id,name,category,price} =  sampleProduct;
function test({id,name,category,price}){
    return `product id:${id}\n product name : ${name}\n product category : ${category}\n product price ${price}`;
}
console.log(test(sampleProduct))