const names = ['Donald', 'Alex', 'Bob', 'alex', "100", 'Юрий', 'игорь'];

console.log(names.sort() === names)

const numbers = [100, 1000, 9, 88]
console.log(numbers.sort())

/*const compareFn = (a, b) => { //по возрастанию
    if (a < b) {
        return -100
    } else {
        return 1000
    }
}*/

const compareFn = (a, b) => a - b

console.log(numbers.sort(compareFn));

const students = [
    {id: 1, name: 'Alexa', age: 21, isMarried: true, scores: 85},
    {id: 2, name: 'alex', age: 21, isMarried: true, scores: 85},
    {id: 3, name: 'Bob', age: 22, isMarried: true, scores: 89},
    {id: 4, name: 'John', age: 20, isMarried: false, scores: 120},
    {id: 5, name: 'Nick', age: 19, isMarried: false, scores: 100}
];

const ageSort = students.sort((a, b) => a.age - b.age)
console.log(ageSort)

/*const nameSort = students.sort((a, b) => a.name < b.name ? -1 : 1)*/
/*const nameSort = students.sort((a, b) => a.name.toUpperCase() < b.name.toUpperCase() ? -1 : 1)*/
const nameSort = students.sort((a, b) => a.name.localeCompare(b.name))


console.log(nameSort)

//bubble sort


