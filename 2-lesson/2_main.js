const students = [
    {name: 'Alexa', age: 21, isMarried: true, scores: 85},
    {name: 'Bob', age: 22, isMarried: true, scores: 89},
    {name: 'John', age: 20, isMarried: false, scores: 120},
    {name: 'Nick', age: 19, isMarried: false, scores: 100}
];


const getNameFoStudents = (el) => el.name;


const names = students.map(s => s.name);

console.log(names);

const addScoresToStudents = (el) => ({...el, scores: el.scores + 10});

const getMappedArray = (arr, mapFn) => {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        const newValue = mapFn(arr[i]);
        result[i] = newValue;
    }
    return result;
}

console.log(getMappedArray(students, getNameFoStudents));
console.log(getMappedArray(students, addScoresToStudents));

const students2 = students.map(s => ({...s, scores: s.scores + 10}));

console.log(students2);
console.log(students.map(getNameFoStudents));

const getFilteredArray = (arr, filterFn) => {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        const newValue = filterFn(arr[i]);
        if (newValue) {
            result.push(arr[i]);
        }

    }
    return result;
}


console.log(getFilteredArray(students, st => st.age > 20));

console.log(students.filter(st => st.age > 20));

const student = {
    name: 'Katya',
    age: 21,
    isMarried: false,
    scores: 90
}

/*
const copyStudent = {};

const keys = Object.keys(student)

for (let i = 0; i < keys.length; i++) {
    copyStudent[keys[i]] = student[keys[i]]
}
*/

const copyStudent = {...student};

console.log(students.map(st => {
    if (st.name === 'Nick') {
        return {...st, isMarried: true}
    } else {
        return st;
    }
}))

const getStudent = (arr, findFn) => {
    for (let i = 0; i < arr.length; i++) {
        const newValue = findFn(arr[i]);
        if (newValue) {
            return arr[i];
        }
    }
}

console.log(getStudent(students, st => st.name === 'Nick'));