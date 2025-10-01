function createPersonalizedGreeting(name, timeOfDay) {
    // Directly return the template literal
    return `Good ${timeOfDay}, ${name}! We hope you have a great time.`; 
}
createPersonalizedGreeting("Sarah","Night")

const celsiusToFahrenheit = (celcius)=> (celcius*9/5) + 32;
console.log(celsiusToFahrenheit(50))


// Junior lavel 
// const numbers = [10, 20, 5, 15];
// let sum =0;
// function sumArry(arr){
//     for(let i =0; i< arr.length; i++){
//         sum+= arr[i];
//     }
//     return sum;
// }

// console.log(sumArry(numbers));


// junior lavel 
// function checkTicketEligibility(isStudent,stdId){
//     if(isStudent=== true && stdId === true){
//         console.log("Discounted Ticket")
//     }else if(isStudent=== true && stdId === false){
//         console.log("Full Price Ticket");
//     }else{
//         console.log("Standard Price");
//     }
//     return;
// }

// console.log(checkTicketEligibility(true,false))

// dont console log the value on the fucn tion always return it 
function checkTicketEligibility(isStudent,hasId){
    if(isStudent && hasId){
        return "Discount available";
    }else if ( isStudent && !hasId){
        return "Full ticket price";
    }else{
        return "Standard price"
    }
}

console.log(checkTicketEligibility(true,true));

// never use a global veriable on a function and chnge it 
const numbers = [10, 20, 5, 15];
function sumArry(arr){
    let sum = 0;
    for(let i =0; i< arr.length; i++){
        sum+= arr[i];
    }
    return sum;
}

console.log(sumArry(numbers));