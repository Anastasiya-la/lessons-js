/*//1. Global scope

console.log(this)
console.log(this===window);*/


/*2. function(), arrow function () =>{}*/
/*const foo = () => {
   console.log(this);
}

foo()*/

/*function bar() {
    const foo = () => {
        console.log(this);
    };
    foo();
}

bar();*/

/*const car = {
    brand: 'bmw',
    showBrand: () => {
        console.log(this.brand);
    }
};

car.showBrand()*/

/*const car = {
    brand: 'bmw',
    showBrand() {
        console.log(this.brand);
    }
};

car.showBrand()*/

/*const car = {
    brand: 'bmw',
    showBrand() {
        const foo = () =>{
            console.log(this.brand);
        }
        foo();
    }
};

car.showBrand();*/

/*const car1 = {
    brand: 'opel'
}

const car = {
    brand: 'bmw',
    showBrand() {
        console.log(this.brand);
    }
};

car1.show = car.showBrand;

car.showBrand()

car1.show()*/


/*const car1 =  {
    brand: 'opel'
}

const car = {
    brand: 'bmw'
}

function showBrand () {
    console.log(this.brand)
}

car.showBrand = showBrand;
car1.showBrand = showBrand;

car.showBrand()
car1.showBrand()*/


// 3. apply, call, bind

/*const car1 = {
    brand: 'bmw',
    showBrand(a, b) {
        console.log(this.brand + a + b)
    }
}

const car2 = {
    brand: 'opel'
}*/

/*car1.showBrand.call(car2, 1, 2);
car1.showBrand.apply(car2, [1, 3]);
const a = car1.showBrand.bind(car2, 1, 4)

a()*/

/*const car1 = {
    brand: 'bmw',
    showBrand() {
        console.log(this.brand)
    }
}

const car2 = {
    brand: 'opel'
}

const scooter = {
    brand: 'suzuki'
}

car1.showBrand.bind(scooter).call(car2)*/


// 4. функции-конструктор

/*
function Car(brand){
    //this
    this.brand = brand

    // return this
}

const car1 = new Car('bmw')
const car2 = new Car('opel')

console.log(car1.brand)
console.log(car2.brand)*/

/*const car = {
    brand: 'bmw',
    showBrand: () => {
        console.log(this.brand)
    }
}

setTimeout(car.showBrand, 1000)*/

/*const car = {
    brand: 'bmw',
    showBrand () {
        console.log(this.brand)
    }
}

setTimeout(car.showBrand, 1000)*/

/*const car = {
    brand: 'bmw',
    showBrand () {
        console.log(this.brand)
    }
}

setTimeout(()=> car.showBrand(), 1000)*/

//or

/*const car = {
    brand: 'bmw',
    showBrand () {
        console.log(this.brand)
    }
}

setTimeout(car.showBrand.bind(car), 1000)*/

/*const car = {
    brand: 'ferrari',
    color: 'red',
    showColor() {
        return `Car color ${this.color}`
    },
    showBrand: () => {
        return `Car brand ${this.brand}`
    }
};
console.log(car.showColor())
console.log(car.showBrand())*/


/*const car = {
    color: 'red',
    firstShowColor(){
        console.log('1', this.color)
    },
    secondShowColor: () =>{
        console.log('2', this.color);
    },
    thirdShowColor(){
        (()=>{
            console.log('3', this.color)
        })()
    }
}
car.thirdShowColor()*/

/*const Calculator = {
    operand1: 0,
    operand2: 0,
    add: function (){
        return this.operand1 + this.operand2;
    },
    multiply: function (){
        return this.operand1 * this.operand2
    }
}
Calculator.operand1 = 5
Calculator.operand2 = 10;

console.log(Calculator.add());
console.log(Calculator.multiply())*/

/*
function outerFunction () {
    const message = 'Hello from outer function!';

    function innerFunction(){
        console.log(this.message);
    }
    return innerFunction;
}

const obj = {
    message: 'Hello from object!'
}

const innerFuncWithObjContext = outerFunction.call(obj)

obj.foo=innerFuncWithObjContext
obj.foo()*/

/*
const obj = {
    a: 1,
    b: function (){
        console.log(this.a)
    }
};
const a = 2;
const fn = obj.b;
fn()*/
