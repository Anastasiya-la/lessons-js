//1. Реализуйте функцию, которая принимает параметром подсторку, число повторов и разделитель, а возвращает сторку, состоящую из указанного количества повторов подстроки с использованием разделителя.

const repeatString = (str, numRep, separator) => {
    let strWithSpace = str + ' '
    return strWithSpace.repeat(numRep).trim().split(' ').join(separator)

}


let repeatedString = repeatString("yo", 3, " ") // "yo yo yo"
let repeatedString2 = repeatString("yo", 3, ",") //"yo,yo,yo"
console.log(repeatedString)
console.log(repeatedString2)


//2. Реализуйте функцию, которая принимает параметром сторку и подстроку, а возвращает true, если строка начинается с указанной подстроки, в противном случае - false. Регистр не учитывается.

const checkStart = (str, substr) => {
    return str.toUpperCase().startsWith(substr.toUpperCase())

}
const checkStartWithSlice = (str, substr) => {
    return str.split('').slice(0, 3).join('').toLowerCase() === substr.toLowerCase()
}

let isStringStart = checkStartWithSlice("Incubator", "inc")
let isStringStart2 = checkStartWithSlice("Incubator", "yo")

console.log(isStringStart)
console.log(isStringStart2)
// checkStart("Incubator", "yo") => false
// str.startWith() slice indexOF

//3. Реализуйте функцию, которая принимает параметром строку и число (количество символов), а возвращает строку из параметров, обрезанную до указанного количества символов и завершает её многоточием.
//truncateString("Всем студентам инкубатора желаю удачи!", 10) => "Всем студе..."

const truncateString = (str, numOfChar) => {
    return str.split('').slice(0, numOfChar).join('') + '...'
}
console.log(truncateString("Всем студентам инкубатора желаю удачи!", 10))

//4. Реализуйте функцию, которая принимает параметром сторку (предложение) и возвращает самое короткое слово в предложении, если в параметрах пустая строка, то возвращает null.
// getMinLengthWord("Всем студентам инкубатора желаю удачи!") => "Всем"
// getMinLengthWord("") => null
// split()

const getMinLengthWord = (sentence) => {
    if (sentence !== '') {
        return sentence.split(' ').reduce((acc, currentValue) => acc.length < currentValue.length ? acc : currentValue)
    } else {
        return null
    }

}

console.log(getMinLengthWord("Всем студентам инкубатора желаю удачи!"))

//5. Реализуйте функцию, которая принимает параметром сторку (предложение) и возвращает то же предложение, где все слова написаны строчными, но начинаются с заглавных букв.
// setUpperCase("всем стУдентам инкуБатора Желаю удачИ!") => "Всем Студентам Инкубатора Желаю Удачи!"
const setUpperCase = (sentence) => {
    return sentence.toLowerCase().split(' ').map(w => w[0].toUpperCase() + w.substring(1)).join(' ')
}
console.log(setUpperCase("всем стУдентам инкуБатора Желаю удачИ!"))

//6. Реализуйте функцию, котрая принимает параметрами строку и подстроку. Если все
// символы подстроки содержаться в стороке - возвращает true, если нет -
// возвращает false. Проверка проводится без учёта регистра и без учётом
// повторяющихся символов.
//* попробовать учитывать повтор символов в подстроке
// isIncludes("Incubator", "Cut") => true
// isIncludes("Incubator", "table") => false
// isIncludes("Incubator", "inbba") => true
// isIncludes("Incubator", "inba") => true
// isIncludes("Incubator", "Incubatorrr")=> true

const isIncludes = (str, substr) => {
    const str1 = str.toLowerCase().split('')
    const str2 = substr.toLowerCase().split('')
    let result = true;
    while(str2.length){
        if(str1.includes(str2[0])){
            str1.splice(str1.indexOf(str2[0]), 1)
            str2.splice(0,1)
        } else {
            return false
        }
    }
    return true
}

