function getPrototypeChain(obj) {
    const arr = [];
    let currentObj = obj;
    while (currentObj !== null) {
        arr.push(currentObj);
        currentObj = Object.getPrototypeOf(currentObj);
    }
    return arr;
};

const obj = {
    name: "obj",
    helloWorld: "Hello"
};
const obj1 = {
    name: "obj1",
};


Object.setPrototypeOf(obj1, obj);


const prototypeChain = getPrototypeChain(obj1);

console.log(prototypeChain);




class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(`${this.name} Издает звук`);
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }
    fetch() {
        console.log(`Собака ${this.name} принесла мяч`);
    }
}

const animal = new Animal("Собака");
const dog = new Dog("Бобик", " Дворняжка");

console.log(dog.fetch());
console.log(dog.breed);
console.log(animal.speak());



class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}


class ShoppingCart {
    constructor(customerName) {
        this.customerName = customerName;
        this.initialTotalCost = 0;
    }
    addItem(product, quantity) {
        this.quantity = 1;
    }
}

const prod1 = new Product("Snikers", 60);
const customer1 = new ShoppingCart("Evgeniy");
console.log(prod1);
console.log(customer1);