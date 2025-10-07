// 1. Your original User Class (Parent)
class User {
    constructor(username, email) {
        this.username = username;
        this.email = email;
    }

    getInfo() {
        return `User: ${this.username}, Email: ${this.email}`;
    }
}

// 2. Write the Admin Subclass here...
// It must extend User and use super()

class Admin extends User {
    constructor(username,email,phone){
        super(username,email);
        this.phone = phone;
    }

    getInfo() {
        // 🔑 FIX: Get the base string from the parent class
        const baseInfo = super.getInfo(); 
        
        // 🔑 FIX: Append the new information using the correct 'this.phone' property
        return `${baseInfo}, Phone: ${this.phone} (Admin Access)`;
    }
// ... extend and other code here ... {
    
    // ... constructor, super(), new property ...

    // ... override getInfo() method ...
}

// 3. Test:
const adminUser = new Admin("Ali", "ali@admin.com", "01452543528");
console.log(adminUser.getInfo());


const user = new User("Niamul","am3994566@gmail.com");
console.log(user.getInfo());