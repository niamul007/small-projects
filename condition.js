let n = 9;

if(n%2===0){
    console.log(`number is even : ${n}`)
}else{
    console.log(`number is odd ${n}`)
}

// let sum = 0;
// for(let i = 0; i<10; i++){
//     console.log(i*3)
// }
// console.log(sum)
// let i =0 ;
// while (i <20) {
//     console.log("fuck")
//     i++;
// }

// let age = 19;

// if(age === 13){
//     console.log("You are a child");
// }else if (age > 13 & age< 17){
//     console.log("you are a teenager")
// }else if(age> 18){
//     console.log("you are an adult")
// }

let dayNumber = 5;

switch (dayNumber) {
    case 1:
        console.log("Monday")
        break;
    case 2:
        console.log("Tuesday")
        break;
    case 3:
        console.log("Wendsday")
        break;
    case 4:
        console.log("Thrusday")
        break;
    case 5:
        console.log("Friday")
        break;
    case 6:
        console.log("Saturday")
        break;
    case 7:
        console.log("Sunday")
        break;
    default:
        console.log("You are wrong my friend")
        break;
}


// for (let i = 0; i < 15; i++){
//     if(i === 8){
//         continue;
//     }
//     console.log(i)
// }


let count = 10;

while (count> 0) {
    console.log(count);
    count--;
}
console.log("Blust off!")