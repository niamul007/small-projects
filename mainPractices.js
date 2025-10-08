const products = [
  { id: 1, name: "Laptop", priceString: "1200.00", quantity: 2 },
  { id: 2, name: "Mouse", priceString: "25.50", quantity: 5 },
  { id: 3, name: "Monitor", priceString: "300.00", quantity: 1 },
];

// Write your processProducts Arrow Function here...
const finalReport = products.map(({ name, priceString, quantity }) => {
  let totalPrice = Number(priceString) * quantity;
  let taxAmount = totalPrice * 0.1;
  return { name, totalPrice, taxAmount };
});
console.log(finalReport);

class Employee {
  constructor(name, baseSalary) {
    this.name = name;
    this.baseSalary = baseSalary;
  }
  getSalary() {
    return this.baseSalary;
  }
}

class Manager extends Employee {
  constructor(name, baseSalary, bonus) {
    super(name, baseSalary);
    this.bonus = bonus;
  }
  getSalary() {
    const info = super.getSalary();
    return `Employee name: ${this.name} \nBase salary: ${info}\nBonus:${this.bonus}`;
  }
}

const acess = new Manager("Niamul", "20000", " 1000");
console.log(acess.getSalary());




function fetchData(source) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (source === "database") {
        reject(new Error("Your first source is incorrect!"));
      } else {
        resolve({ id: 1, type: source });
      }
    }, 1000);
  });
}

function processData(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (data.type === "server") {
        resolve("Data processed for type: " + data.type);
      } else {
        reject(new Error("your  data type is incorrect"));
      }
    }, 1000);
  });
}

async function runPipeline(source) {
  console.log("processing.....");

  try {
    let getF1 = await fetchData(source);
    let getF2 = await processData(getF1);
    console.log(getF2);
  } catch (error) {
    console.log(error.message);
  }

}

(runPipeline("server"));
