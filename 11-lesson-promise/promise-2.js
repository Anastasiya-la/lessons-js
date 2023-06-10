/*const alex = {
    askFile() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                //resolve('Users')
                reject('Error')
            }, 2000)

        })
    }
}

const promise = alex.askFile();*/

/*
promise.then((result) => {
    console.log('Then')
    console.log(result)
})

promise.catch((error) => {
    console.log('Catch')
    console.log(error)
})

promise.finally(() => {
    console.log('Finally')
})
*/


// chain of promises
/*
const promise2 = promise.then((result) => {
    console.log(result)
})
const promise3 = promise2.then(() => {
})

promise3.then(() => {
})*/

/*alex.askFile()
    .then((res)=>{
        console.log('Then1', res)
        return 1
    })
    .then((res)=>{
        console.log('Then2', res)
        return 2
    })
    .then((res)=>{
        console.log('Then3', res)
    })
    .then((res)=>{
        console.log('Then4', res)
    })*/


// promise не зарезолвен, поэтому последний then не отработает
/*
alex.askFile()
    .then(() => {
        return new Promise(() => {
        })
    })
    .then((res) => {
        console.log('Then2', res)
    })
*/

// подписываемся на новый нами созданный промис, который внутри себя резолвится
/*alex.askFile()
    .then((res) => {
        return new Promise((resolve) => {
            console.log(res)
            setTimeout(() => {
                resolve('Hello')
            }, 1000)
        })
    })
    .then((res) => {
        return new Promise((resolve) => {
            console.log(res)
            setTimeout(() => {
                resolve('Hello1')
            }, 1000)
        })
    })
    .then((res) => {
        return new Promise((resolve) => {
            console.log(res)
            setTimeout(() => {
                resolve('Hello2')
            }, 1000)
        })
    })*/

/*alex.askFile()
    .catch(() => {
        console.log('Catch') // ошибки нет
    })
    .then(() => {
        console.log('Then')
    })*/

/*
alex.askFile()
    .catch(() => {
        console.log('Catch')
        console.log(age) //ошибка есть
    })
    .then(() => {
        console.log('Then')
    })
    .then(() => {
        console.log('Then1')
    })
    .catch(() => {
        console.log('Catch1')
    })*/

/*alex.askFile()
    .finally(() => {
        console.log('Finally')
    })
    .catch(() => {
        console.log('Catch') //
    })
    .then(() => {
        console.log('Then')
    })*/


// часто используемая
/*alex.askFile()
    .then(() => {
        console.log('Then')
    })
    .catch(() => {
        console.log('Catch')
    })
    .finally(() => {
        console.log('Finally')
    })*/

// Promise.all & Promise.allSettled
/*const promise1 = fetch('https://google.com')

promise1
    .then((data) => {
        console.log(data)
    })

const promise2 = fetch('https://vk.com')

promise2.then((data) => {
    console.log(data)
})

const otherPromise = Promise.all([promise1, promise2])
const otherPromise2 = Promise.allSettled([promise1, promise2])

otherPromise
    .then((results) => console.log(results))
    .catch(() => {

    })*/

//Promise.resolve Promise.reject

const resolvedPromise = Promise.resolve(100)
console.log(resolvedPromise)

/*const rejectedPromise = Promise.reject({message: 'Some error'})
console.log(rejectedPromise)*/

/*function getNumber() {
    return Promise.resolve(Math.random())
}*/

/*function getNumber() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(Math.random())
        }, 2000)
    })
    return promise
}

getNumber().then(n => console.log(n))
getNumber().then(n => console.log(n))*/

/*const wait = (duration) => {

    let promise = new Promise((res) => {
        setTimeout(() => {
            res()
        }, duration)
    })

    return promise

}

async function run() {
    await wait(1000)
    console.log(1)
    await wait(1000)
    console.log(2)
    await wait(1000)
    console.log(3)
}

run()*/

const api = {
    async save() {

    },
    async read() {
        return {name: 'it-kamasutra'}
    }
}

async function run2() {
    await api.save()
    console.log('saved')
    let data = await api.read()
    console.log('read: ', data)
}

run2()