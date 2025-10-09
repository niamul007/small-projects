const arr = ["niamul","rahul","nishita","tommy"];
function firstAndLast(arry){
    let first = arry[0];
    let last = arry[arry.length - 1];
    return [first,last]
}
console.log(firstAndLast(arr));
console.log(arr)

//Try better way around
// function firstAndLast(arry){
//     let newArr = [...arry];
//     return [newArr.pop() , newArr.shift()];
// }

// console.log(firstAndLast(arr));

const person = {
    name: "Alex",
    job: "Developer"
}

const newFun = ({name,job})=>{
    return `${name} is a ${job}`;
} 
console.log(newFun(person));



const config = { 
    style: { 
        header: { 
            fontSize: 16 
        }
    }
};
const size = config.style.header.fontSize;
console.log(size);

// Write your single line of code here using optional chaining to get fontSize from `data`:
// const size = ... ;

// console.log(size);