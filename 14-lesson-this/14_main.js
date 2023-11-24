/*
const car1 = {
    brand : 'bmw',
    maxSpeed: 200,
    startEngine(){
        console.log(`Start ${this.brand}`)
    }
}
const car2 = {
    brand : 'kia',
    maxSpeed: 220,
    startEngine(){
        console.log(`Start ${this.brand}`)
    }
}*/

// фабричная функция
/*
function createCars(brand, maxSpeed) {
    const newCar = {
        brand: brand,
        maxSpeed: maxSpeed,
        startEngine() {
            console.log(`Start ${this.brand}`);
        },
    };
    return newCar;
}

const car1 = createCars('bmw', 220);
const car2 = createCars('kia', 240)*/

// добавление метода через prototype
/*function Car(brand, maxSpeed) {
    this.brand = brand;
    this.maxSpeed = maxSpeed;
}

Car.prototype.startEngine = function () {
    console.log(`Start${this.brand}`);
}
Car.prototype.showMaxSpeed = function () {
    console.log(`Max speed ${this.maxSpeed}`);
}

const car1 = new Car('bmw',200)
const car2 = new Car('kia',220)

console.log(car1)
console.log(car2)

car1.showMaxSpeed()
car2.showMaxSpeed()*/

// создание класса
class ClassCar {
    #brand

    constructor(brand, maxSpeed) {
        this.#brand = brand;
        this.maxSpeed = maxSpeed;
    }

    showMaxSpeed() {
        console.log(`Max speed ${this.maxSpeed}`);
    }

    startEngine() {
        console.log(`Start ${this.#brand}`);
    }

    get brand() {
        return this.#brand
    }

    set brand(newBrand) {
        if (!newBrand) {
            throw new Error("Bad brand")
        }
        this.#brand = newBrand;
    }

    getBrand() {
        return this.#brand
    }

    setBrand(newBrand) {
        if (!newBrand) {
            throw new Error("Bad brand")
        }
        this.#brand = newBrand;
    }

    static whoIsFaster(car1, car2) {
        console.log(`${car1.maxSpeed > car2.maxSpeed ? car1.brand : car2.brand} is faster`)
    }
}

const car1 = new ClassCar('bmw', 200)
const car2 = new ClassCar('kia', 220)

console.log(car1)
console.log(car2)

car1.showMaxSpeed()
car2.startEngine()

console.log(car1.brand)
car1.brand = 'Toyota'
console.log(car1.brand)

ClassCar.whoIsFaster(car1, car2);

class SuperCar extends ClassCar {
    constructor(brand, maxSpeed, wings) {
        super(brand, maxSpeed);
        this.wings = wings;
    }

    startFly() {
        console.log(`${this.brand} start flying`)
    }
}

const superCar = new SuperCar('super bmw', 300, true)

console.log(superCar)
superCar.startEngine()
superCar.startFly()

superCar.brand = 'super audi';
console.log(superCar.brand)



SuperCar.whoIsFaster(superCar, car1)
