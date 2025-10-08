let arry = ["Niamul","nahid","faysal","hadi","judy"];

function removeLastElement(arr){
    let newArr = [...arr];
    newArr.pop();
    return newArr;
}
// console.log(removeLastElement(arry))
// console.log(arry)


// Step 1: Define the two objects
const userProfile = { 
  name: "Alex", 
  age: 30 
};

const userSettings = { 
  theme: "dark", 
  notifications: true 
};

// Step 2: Merge the objects using the Spread Operator
// ... Your code here for mergedUser ...
let marge = {...userProfile, ...userSettings}
console.log(marge)

// Step 3: Destructure and Log
// ... Your destructuring code here ...
const {name : userName} = marge;
console.log(userName); // Should output "Alex"