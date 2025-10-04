// main.js

// 1. Import the Default Export: We can name the default export ANYTHING. 
//    (We'll call it 'loginChecker' instead of 'authenticateUser')
import loginChecker from './authService.mjs';

// 2. Import the Named Export: We MUST use the exact name in curly braces.
import { ADMIN_ID } from './authService.mjs';


async function runLoginProcess() {
    const user = "admin";
    const pass = "password123";

    console.log(`[App]: Starting login for user ID ${ADMIN_ID}`); // Using the imported constant

    try {
        // Using the imported default function (named 'loginChecker')
        const result = await loginChecker(user, pass);
        console.log(`✅ Login Success! ${result.message}`);
    } catch (error) {
        console.error(`❌ Error: ${error.message}`);
    }
}

// Start the application
runLoginProcess();