// authService.js

// 1. Named Export (for the constant)
export const ADMIN_ID = 1;

// 2. Default Export (for the main function)
function authenticateUser(username, password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (username === "admin" && password === "password123") {
                resolve({ success: true, message: `Access granted to user ${username}` });
            } else {
                reject(new Error("Invalid credentials."));
            }
        }, 1500);
    });
}

// export default makes this the main thing the file provides.
export default authenticateUser;