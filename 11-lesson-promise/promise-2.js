const alex = {
    askFile() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                //resolve('Users')
                reject('Error')
            }, 2000)

        })
    }
}

const promise = alex.askFile();

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
alex.askFile()
    .then(() => {
        console.log('Then')
    })
    .catch(() => {
        console.log('Catch')
    })
    .finally(() => {
        console.log('Finally')
    })
