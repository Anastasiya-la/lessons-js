const students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85,
    },
    {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 90,
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120,
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100,
    },
    {
        name: "Helen",
        age: 20,
        isMarried: false,
        scores: 110,
    },
    {
        name: "Ann",
        age: 20,
        isMarried: false,
        scores: 105,
    },
];

const user = {
    name: "Bob",
    age: 23,
    isMarried: false,
    friends: ["Alex", "Nick", "John"],
};

//1. Создать поверхностную копию объекта user
let copyUser;

copyUser = {...user};

//Проверка:
console.log(user === copyUser)
console.log(user.friends === copyUser.friends)


//2. Полная (глубокая) копия объекта user
let deepCopyUser = {...user, friends: [...user.friends]};


//Проверка:
console.log(user === deepCopyUser)
console.log(user.friends === deepCopyUser.friends)

//3. Поверхностная копия массива students
let copyStudents = [...students];

//Проверка:
console.log(students === copyStudents)
console.log(students[0] === copyStudents[0])

//4. Полная (глубокая) копия массива students (map)
let deepCopyStudents = students.map(s => ({...s}))

//Проверка:
console.log(deepCopyStudents === students)
console.log(deepCopyStudents[0] === students[0])

//Далее все преобразования выполняем не модифицируя исходный массив students

//5. Отсортируйте студентов по успеваемости (лучший идёт первым) (sort)

const compareFn = (a, b) => b.scores - a.scores


let sortByScores = deepCopyStudents.sort(compareFn)

console.log(sortByScores)

//5a. Отсортируйте студентов по алфавиту

const compareName = (a, b) => {
    return a.name < b.name ? -1 : 1;
}

/*function sortByName(a, b) {
    switch (a.name > b.name) {
        case true:
            return 1;
        case false:
            return -1;
        default:
            return 0;
    }
}*/

let sortByName = deepCopyStudents.sort(compareName);
console.log(sortByName);

//6. Сформируйте массив студентов, у которых 100 и более баллов (filter)
let bestStudents = students.filter(s => s.scores >= 100);
console.log(bestStudents)

//6a.Сформируйте массив из трёх лучших студентов(splice)
let topStudents = deepCopyStudents.splice(0, 3);

console.log(topStudents);
console.log(deepCopyStudents);

//6b. Объедините массивы deepCopyStudents и topStudents так,
// чтоб сохранился порядок сортировки

let newDeepCopyStudents = [...deepCopyStudents, ...topStudents]
console.log(newDeepCopyStudents)

//7. Сформируйте массив холостых студентов
let notMarriedStudents = students.filter(s => !s.isMarried);
console.log(notMarriedStudents)

//8. Сформируйте массив имён студентов
let studentNames = students.map(s => s.name)
console.log(studentNames)

//8a. Сформируйте строку из имён студентов, разделённых
// - пробелом
// - запятой

let nameWithSpace = studentNames.join(' ');
console.log(nameWithSpace)
let nameWithComma = studentNames.join(', ');
console.log(nameWithComma);

//9. Добавьте всем студентам свойство "isStudent" со значением true
let trueStudents = students.map(st => ({...st, isStudent: true}))
console.log(trueStudents)

//10. Nick женился. Выполните преобразование массива students
let studentWithMarriedNick = students.map(st => st.name === 'Nick' ? {...st, isMarried: true} : st)
console.log(studentWithMarriedNick)

//11. Найдите Студентку по имени Ann
let ann = students.find(st => st.name === 'Ann');
console.log(ann);
console.log(students);

//12. Найдите студента с самым высоким баллом
let bestStudent = students.reduce((acc, st) => acc.scores > st.scores ? acc : st)

console.log(bestStudent);

//13. Найдите сумму баллов всех студентов
let scoresSum = students.reduce((acc, st) => acc + st.scores, 0);
console.log(scoresSum);

// 14.Напишите функцию addFriends, которая принимает параметром массив students и возвращает новый массив, при этом добавляет в каждому студенту свойство .friends, значением которого является массив имён всех остальных студентов из массива, за исключением собственного имени студента. Т.е. в друзьях у Боба Боба быть не должно.
const addFriends = (students) => {
    return students.map(st => ({...st, friends: students.map(st => st.name).filter((name) => st.name !== name)}))
}

console.log(addFriends(students));
