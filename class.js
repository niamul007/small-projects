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


class Name{
    constructor(userName,calledName){
        this.userName =userName;
        this.calledName = calledName;
    }

    callUser(){
        return `User name is ${this.userName} and he is called by ${this.calledName}`;
    }
}


const myName = new Name ("Niamul","Jihad");

console.log(myName.callUser());