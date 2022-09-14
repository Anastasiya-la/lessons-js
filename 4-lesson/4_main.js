const todolistID_1 = 'fddfd-17345';
const todolistID_2 = 'ffggg-83377';

const todoLists = [
    {
        id: todolistID_1,
        title: 'What to learn',
        filter: 'all'
    },
    {
        id: todolistID_2,
        title: 'What to buy',
        filter: 'all'
    }
]

const tasks = {
    [todolistID_1]: [
        {id: 11, title: 'JS', isDone: false},
        {id: 12, title: 'HTML', isDone: false},
        {id: 13, title: 'CSS', isDone: false}
    ],
    [todolistID_2]: [
        {id: 21, title: 'Water', isDone: false},
        {id: 22, title: 'Cola', isDone: false},
        {id: 23, title: 'Juice', isDone: false}
    ]
}

console.log([...todoLists, {id: 3, title: 'What to read', filter: 'all'}])
console.log({...tasks, 3: []})

const secretKey = Math.floor(Math.random() * 100)

const user = {
    ['name']: 'Bob',
    'user age': 23,
    [secretKey]: 'password'
}

console.log(user);

const numbers = [10, 20, 30];
console.log(numbers.reduce((acc, el) => acc + el, 0)); // 60

const students = [
    {id: 1, name: 'Alexa', age: 21, isMarried: true, scores: 85},
    {id: 2, name: 'Bob', age: 22, isMarried: true, scores: 89},
    {id: 3, name: 'John', age: 20, isMarried: false, scores: 120},
    {id: 4, name: 'Nick', age: 19, isMarried: false, scores: 100}
];

const updatedStudents = students.reduce((acc, el) => {
    acc[el.id] = {...el}
    delete acc[el.id].id
    return acc
}, {})

console.log(updatedStudents)