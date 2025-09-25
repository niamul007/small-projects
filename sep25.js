
const todos = [
  { id: 1, text: "Learn JS", done: true },
  { id: 2, text: "Learn React", done: false },
  { id: 3, text: "Build Projects", done: false }
];

let makeDone = todos.map(item=>{
    if(item.id === 2 ){
        return {...item,done: true};
    }
    else{
        return item
    }
})
console.log(makeDone) 

const updated = makeDone.filter((item)=> item.done === true).map(data=>{
    return data.text;
})

// console.log(updated)

// ✅ Task 1: use .map() to mark todo with id 2 as done
// ✅ Task 2: use .filter() to get only done todos
// Expected: ["Learn JS", "Learn React"]


const users = [
  { name: "Alice", age: 22 },
  { name: "Bob", age: 17 },
  { name: "Charlie", age: 30 },
  { name: "Diana", age: 15 }
];

const adults = users.filter((item)=> item.age > 18).map(data=>{
    return data.name
})
console.log(adults)

// ✅ Task 1: filter only users >= 18
// ✅ Task 2: map their names into a new array
// Expected: ["Alice", "Charlie"]
