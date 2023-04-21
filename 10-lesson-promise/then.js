promise1 = wait(1000)

/*
const promise2 = promise1.then(() => {
    console.log('subscriber for promise 1 called')
})

const promise3 = promise2.then(() => {
    console.log('subscriber for promise 2 called')
})
*/

const thenPromise6 = promise1
    .then(() => {
        console.log('subscriber for promise 1 called')
        return 1
    }).then((one) => {
        console.log('subscriber for promise 2 called')
        return 100
    }).then((onehundred) => {
        console.log('subscriber for promise 3 called')
    }).then((noData) => {
        console.log('subscriber for promise 4 called')
        const waitPromise = wait(1000)
        return waitPromise
    }).then((noData) => {
        console.log('subscriber for promise 5 called')
    })