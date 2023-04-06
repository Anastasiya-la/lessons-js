// lexical environment


//var a; //{a: undefined, foo: function}

//a = 5; // {a: 5}

//foo()
//function foo(){


/*
const foo = function(){}//  запишется в момент выполнения кода
const bar = () =>{}//  запишется в момент выполнения кода*/

function foo() {
    //[[env]]
    //fLE {a: function}

    const a = () => {
        //[[env]]
        console.log('Hello')
    }
    return a
}

const bar = foo()

bar();


//globalLE {counter: func}

/*function counter(){
    //[[env]] -> globalLE
    //counterLE {count: 0, a: func}
    //counterLE2 {count: 0, a: func}
    let count = 0;
    const a = () => {
        // [[env]] -> counterLE
        // [[env]] -> counterLE2
        //aLE{}
        console.log(count++)
    }
    return a
}*/

//globalLE {counter: func, count: 0 }
let count = 0;

function counter(name) {
    //[[env]] -> globalLE
    //counterLE {count: 0, a: func, name: olya}
    //counterLE2 {count: 0, a: func, name: ivan}
    const a = () => {
        // [[env]] -> counterLE
        // [[env]] -> counterLE2
        //aLE{}
        console.log(name)
        console.log(count++)
    }
    return a
}

const count1 = counter('olya')
const count2 = counter('ivan')

count1()
count1()
count1()

count2()
count2()
count2()

function pow(x, n) {
    if (n === 1) {
        return x;
    } else {
        return x * pow(x, n - 1);
    }
}

pow(2, 3)