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

// runAsyncGreeting("Niamul");
// Call 2: Failure (Wait 2 seconds, then logs the error message)
// runAsyncGreeting("Fail");

// function delay(ms) {
//     // 👈 This is the Promise Giver
//     return new Promise(resolve => setTimeout(resolve, ms));
// }

// function delay(ms) {
//     // 👈 This is the Promise Giver
//     return new Promise(resolve => setTimeout(resolve, ms));
// }

// async function runExample() {
//     console.log("Start");

//     // 1. Await pauses the 'runExample' function until the Promise from delay() resolves (after 2s).
//     await delay(2000);

//     console.log("End of await.");

//     // 2. This line runs immediately because it is outside the async function.
//     console.log("Code outside the async function runs immediately.");
// }

// runExample();

// Output:
// Start
// Code outside the async function runs immediately. // 👈 This runs first!
// (2 second wait)
// End of await.

// Simulates a real API call
// function fetchUserApi(id) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       if (id === 500) {
//         // Simulating a failed response status (e.g., HTTP 500)
//         resolve("User access denied");
//       } else {
//         resolve(`Data for user ${id} successfully retrieved.`);
//       }
//     }, 1500); // 1.5 second delay
//   });
// }

// async function getUserData(userId) {
//   // console.log("Start checking things you will notified few second later....")
//   try {
//     const testing = await fetchUserApi(userId);
//     console.log(`Success : ${testing}`);
//   } catch (error) {
//     console.log(error.message);
//   }
// }

// getUserData(101);
// getUserData(500);

function getName(userName) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userName !== "Niamul") {
        reject(new Error(`Access Denied`));
      } else {
        resolve(`Welcome, access granted to ${userName}.`);
      }
    }, 3000);
  });
}

async function reciveName(person) {
  try {
    let grantedPerson = await getName(person);
    console.log(`You have permission ${grantedPerson}`);
  } catch (error) {
    console.error(`Sorry you are not allowed : ${error.message}`);
  }
}

// reciveName("Niamul");

function authenticateUser(username, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === "admin" && password === "password123") {
        resolve(`You are allowed`);
      } else {
        reject(new Error("You are not allowed"));
      }
    }, 2000);
  });
}

async function handleLogin(user, pass) {
  console.log("Checking in progress....");
  try {
    let checking = await authenticateUser(user, pass);
    console.log(`✅ Welcome back ${checking}`);
  } catch (error) {
    console.error(`❌ Login failed: ${error.message}`);
  }
}

// handleLogin("adminniamul","password123");

function checkJobStatus(jobId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Number(jobId) % 2 === 0) {
        "Job ID " + jobId + " is complete.";
      } else if (Number(jobId) === 999) {
        reject(new Error("Server timeout during status check."));
      } else {
        resolve("Job ID " + jobId + " is still processing...");
      }
    }, 2000);
  });
}

async function monitorJob(id) {
  console.log("Searching......");
  try {
    let check = await checkJobStatus(id);
    console.log(`Result: ${check}`);
  } catch (error) {
    console.error(`Faild : ${error.message}`);
  }
}

// monitorJob(999);

// practice 3

function fetchItemId(productName) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (productName === "Towel") {
        resolve(45);
      } else {
        reject(new Error("Product name didn't matched"));
      }
    },1000);
  });
}

function fetchItemPrice(itemId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (itemId === 45) {
        resolve("The price is $99.");
      } else {
        reject(new Error("Product ID didn't matched"));
      }
    }, 1000);
  });
}

async function getFinalPrice(name) {
  console.log("Searching...");
  try {
    let getName = await fetchItemId(name);
    let getPrice = await fetchItemPrice(getName);
    console.log(`Product name is : ${getName}`);
    console.log(getPrice);
  } catch (error) {
    console.error(error.message);
  }
}


getFinalPrice("Towel");