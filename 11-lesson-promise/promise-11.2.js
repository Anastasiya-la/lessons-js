// создание промиса через конструктор


let axios = {
    get() {
        let pr = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({
                    G: 2,
                    g3: 4,
                    message: 'YoYoYo'
                })
            }, 3000)

        });
        return pr;
    }
}

axios.get()
    .then(data => console.log(data))
    .then(() => console.log(1))
    .then(() => console.log(2))
    .catch(data => console.error(data))


/*let a = {
    sum(a,b){
        console.log(a + b)
        return this;
    }
}

a.sum(2,3)*/

let a = {
    result: 0,
    sum(a) {
        this.result += a;
        return this;
    },
    minus(a) {
        this.result -= a;
        return this;
    },
    mult(a) {
        this.result *= a;
        return this;
    }
}


a.sum(2)
    .minus(1)
    .mult(5)

console.log(a.result)

/*let promise = axios.get()

promise.then((data) => {
    return data.message;
})
    .then((message) => {
        console.log(message)
    })*/

let promise = axios.get();
promise.then((data) => {
    return new Promise((res) => {
        res('New Promise')
    })
})
    .then((message) => {
        console.log(message)
    })