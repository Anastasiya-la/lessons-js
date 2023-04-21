let parsedGoogleData = null; // снаружи лежат распаршенные из гугла данные
let dataFromIncubator = null;

fetch('https://google.com') // делается запрос на гугл

    .then((data) => { // данные приходят из гугл в параметр data
        parsedGoogleData = parseGoogleResult(data) // тут прасятся эти данные


        return fetch(result[0]) // делается запрос на получение данных на первый сайт ит-инкубатор


    })
    .then((data) => {  // когда данные с первого сайта придут, данные попадут сюда
        dataFromIncubator = data // записали данные в переменную инкубатор
        const hexcletDataPromise = fetch(result[1]) // делается запрос на получение данных второго сайта
        return hexcletDataPromise
    })
    .then((dataFromHexlet) => { // когда данные со второго сайта придут, обработай эти данные

        return processData(firstResultData, secondaryResultData)

    })
    .then((finalData) => { // когда придут, передай сюда
        console.log('Data is ready')
    })

function processData(data1, data2, callback) {

}