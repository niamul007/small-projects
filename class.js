// // 1. Defining the Class (The Blueprint)
// class Car {
//     // The constructor is a special method that runs automatically 
//     // when a new object is created using the 'new' keyword.
//     // It is used to initialize the object's properties.
//     constructor(make, model, color) {
//         // 'this' refers to the specific object (instance) being created.
//         this.make = make;       // Creates a 'make' property on this object.
//         this.model = model;     // Creates a 'model' property on this object.
//         this.color = color;     // Creates a 'color' property on this object.
//         this.speed = 0;         // Initializes a property with a default value.
//     }

//     // 2. Defining Methods (Actions the object can perform)
    
//     // An instance method to accelerate the car
//     accelerate(amount) {
//         this.speed += amount;
//         console.log(`${this.color} ${this.make} is now going ${this.speed} mph.`);
//     }

//     // An instance method to display the car's identity
//     getDetails() {
//         return `This is a ${this.color} ${this.make} ${this.model}.`;
//     }

//     // 3. Static Method (Belongs to the Class itself, not the object)
//     // You call this directly on the Class name (e.g., Car.getDefaultWheels())
//     static getDefaultWheels() {
//         return 4;
//     }
// }

// // ----------------------------------------------------------------------

// // 4. Creating Objects (Instances) from the Class
// // The 'new' keyword runs the constructor()
// const myCar = new Car("Toyota", "Camry", "Red");
// const yourCar = new Car("Honda", "Civic", "Blue");


// 5. Using Properties and Methods

// Accessing Properties:
// console.log(myCar.color);        // Output: Red
// console.log(yourCar.speed);       // Output: 0

// Calling Methods:
// console.log(myCar.getDetails()); 
// Output: This is a Red Toyota Camry.

// myCar.accelerate(50);
// Output: Red Toyota is now going 50 mph.

// Calling the Static Method:
// console.log(`All cars have ${Car.getDefaultWheels()} wheels.`);
// Output: All cars have 4 wheels.
// NOTE: You CANNOT call this on an instance: myCar.getDefaultWheels() would fail.


// class Name{
//     constructor(userName,calledName){
//         this.userName =userName;
//         this.calledName = calledName;
//     }

//     callUser(){
//         return `User name is ${this.userName} and he is called by ${this.calledName}`;
//     }
// }


// const myName = new Name ("Niamul","Jihad");

// console.log(myName.callUser());


class User{
    constructor(UserName,email){
        this.UserName = UserName;
        this.email = email;
    }
    getInfo(){
        return `User name is: ${this.UserName}\nUser eamil is: ${this.email}`
    }
}

const userData = new User("Niamul","am3994566@gmail.comm");

console.log(userData.getInfo());


// 1. The Parent/Superclass (Your Existing Code)
class User {
    constructor(username, email) {
        this.username = username;
        this.email = email;
    }

    getInfo() {
        return `User: ${this.username}, Email: ${this.email}`;
    }
}

// ----------------------------------------------------------------------

// 2. The Child/Subclass (The New Code for Inheritance)
// The 'extends' keyword links Admin to User.
class Admin extends User {
    // The constructor accepts all parent properties PLUS the new child property (accessLevel).
    constructor(username, email, accessLevel) {
        
        // 🔑 Rule 1: 'super()' MUST be the first line in the child constructor.
        // It calls the PARENT's (User's) constructor to handle initialization 
        // of 'username' and 'email'.
        super(username, email); 

        // 🔑 Rule 2: Initialize the new, specialized property specific to Admin.
        this.accessLevel = accessLevel;
    }

    // 3. Method Overriding and Calling the Parent Method
    // This method has the same name as the parent's, so it overrides it.
    getInfo() {
        // Use 'super.getInfo()' to call the parent's implementation
        // and get the base string.
        const baseInfo = super.getInfo();

        // Append the specialized information specific to Admin.
        return `${baseInfo}, Access: ${this.accessLevel}`;
    }
}

// ----------------------------------------------------------------------

// 4. Testing the Inheritance

// Create an instance of the Child class
const adminUser = new Admin("Ali", "ali@admin.com", "Full Management");

// The Admin object inherits 'username' and 'email' from User, 
// and adds 'accessLevel'.
console.log(adminUser); 
// Output: Admin { username: 'Ali', email: 'ali@admin.com', accessLevel: 'Full Management' }

// Call the OVERRIDDEN getInfo() method
console.log(adminUser.getInfo()); 
// Output: User: Ali, Email: ali@admin.com, Access: Full Management



