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

console.log(updated)

// ✅ Task 1: use .map() to mark todo with id 2 as done
// ✅ Task 2: use .filter() to get only done todos
// Expected: ["Learn JS", "Learn React"]


