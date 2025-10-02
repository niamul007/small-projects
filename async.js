// function delayedGreeting(name) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             // New logic: Simulate failure if the name is "Fail"
//             if (name === "Fail") {
//                 // ❌ If there's an error, we call reject()
//                 reject(new Error("User access denied by server."));
//             } else {
//                 // ✅ If successful, we call resolve()
//                 resolve(`Hello, ${name}! Your data is ready.`);
//             }
//         }, 2000); // 2-second delay
//     });
// }

// async function runAsyncGreeting(name) {
//     console.log(`Starting process for ${name}...`);

//     try {
//         // 1. Place the successful await code inside 'try'.
//         const greeting = await delayedGreeting(name);
        
//         // 2. This line runs ONLY if the Promise RESOLVED.
//         console.log("Success:", greeting);
    
//     } catch (error) {
//         // 3. If the Promise REJECTED, execution jumps here.
//         //    The 'error' variable holds the Error object from reject().
//         console.error("Failure:", error.message);
//     }
// }

// // runAsyncGreeting("Niamul"); 
// // Call 2: Failure (Wait 2 seconds, then logs the error message)
// runAsyncGreeting("Fail");


// function delay(ms) {
//     // 👈 This is the Promise Giver
//     return new Promise(resolve => setTimeout(resolve, ms)); 
// }


function delay(ms) {
    // 👈 This is the Promise Giver
    return new Promise(resolve => setTimeout(resolve, ms)); 
}

async function runExample() {
    console.log("Start");

    // 1. Await pauses the 'runExample' function until the Promise from delay() resolves (after 2s).
    await delay(2000); 

    console.log("End of await.");

    // 2. This line runs immediately because it is outside the async function.
    console.log("Code outside the async function runs immediately.");
}

runExample();

// Output:
// Start
// Code outside the async function runs immediately. // 👈 This runs first!
// (2 second wait)
// End of await.