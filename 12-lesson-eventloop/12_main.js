// event loop

/*console.log('a')

setTimeout(() => {
    console.log('timeout1')
}, 1000)

setTimeout(() => {
    console.log('timeout2')
}, 0)


console.log('b')
console.log('c')*/


/*function a() {
    b()
    console.log('a')
}

function b() {
    c()
    console.log('b')
}

function c() {
    console.log('c')
}

a();*/


/*
function a() {
    console.log('a')
}

function b() {
    console.log('b')
}

function c() {
    console.log('c')
}

a();
setTimeout(() => {
    console.log('timeout')
}, 2000)

b();
c();*/

/*

function a() {
    console.log('a')
}

function b() {
    console.log('b')
}

function c() {
    console.log('c')
}

a();
new Promise (function (resolve, reject){
    console.log('create promise')
    setTimeout(function timer(){
        resolve(console.log('timeout'))
    }, 1000)
})

b()
c()*/


/*
function a() {
    console.log('a')
}

function b() {
    console.log('b')
}

function c() {
    console.log('c')
}

a();
new Promise(function (resolve, reject) {
    console.log('create promise')

    setTimeout(function timer() {
        console.log('timeout')
    }, 0)
    resolve(console.log('res'))
}).then(() => {
    console.log('then')
})

b()
c()*/

/*
setTimeout(function timer() {
    console.log('timeout1')
}, 1000)
setTimeout(function timer() {
    console.log('timeout2')
}, 1000)
setTimeout(function timer() {
    console.log('timeout3')
}, 1000)*/


/*
console.log('start')

setTimeout(function timer() {
    console.log('timeout1')
}, 5000)
setTimeout(function timer() {
    console.log('timeout2')
}, 3000)
setTimeout(function timer() {
    console.log('timeout3')
}, 1000)
setTimeout(function timer() {
    console.log('timeout4')
}, 1000)

console.log('end')
*/

/*
setTimeout(() => {
    console.log('1')
})

new Promise(function (resolve, reject) {
    console.log('2')
    resolve();
}).then(() => {
    console.log('3')
})

console.log('4')
*/

/*
setTimeout(() => {
    console.log('s1')
}, 0)

setTimeout(() => {
    console.log('s2')
}, 1000)

new Promise(function (resolve, reject) {
    console.log('p1')
    resolve()
    console.log('p2')
}).then(() => {
    console.log('p3')
})

console.log('w1')

async function test1(){
    console.log('a1')
    await test2()
    console.log('a2')
}

async function test2(){
    console.log('a3')
}

test1()
console.log('w2');

*/

/*
const myPromise = (delay) =>{
    console.log(1)
    return new Promise((res, rej)=>{
        setTimeout(res, delay)
    })
}

setTimeout(() => {
    console.log('in setTimeout1')
}, 1000)

myPromise(1000).then(()=>{
    console.log('in Promise1')
})

setTimeout(() => {
    console.log('in setTimeout2')
}, 100)

myPromise(2000).then(()=>{
    console.log('in Promise2')
})*/

/*const myPromise = (delay) => {
    console.log(1)
    return new Promise((res, rej) => {
        setTimeout(res, delay)
    })
}


myPromise(1000).then(() => {
    console.log('in Promise1')
})

setTimeout(() => {
    console.log('in setTimeout1')
}, 1000)

setTimeout(() => {
    console.log('in setTimeout2')
}, 100)

myPromise(2000).then(() => {
    console.log('in Promise2')
})*/


console.log(1)

setTimeout(() => {
    console.log(2)
    Promise.resolve().then(()=>{
        console.log(3)
    })
})

new Promise((res, rej) => {
    console.log(4)
    res(5)
}).then((data)=>{
    console.log(data)
    Promise.resolve().then(()=>{
        console.log(6)
    }).then(()=>{
        console.log(7)
        setTimeout(() => {
            console.log(8)
        }, 0)
    })
})

setTimeout(() => {
    console.log(9)
})

console.log(10)