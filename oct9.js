const arr = ["niamul","rahul","nishita","tommy"];

function firstAndLast(arry){
    let newArr = [...arry];
    return [newArr.pop() , newArr.shift()];
}

console.log(firstAndLast(arr));

const person = {
    name: "Alex",
    job: "Developer"
}

const newFun = ({name,job})=>{
    return `${name} is a ${job}`;
} 
console.log(newFun(person));