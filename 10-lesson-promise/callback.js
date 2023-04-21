// let promise = {}

// button.addEventListener('click', () => {})
// store.subscribe(() => {})


// promise._status = 'pending'; // 'fulfilled' || 'rejected'

// с асинхронным кодом(fetch, setTimeout, setInterval, fs.read, db.users.find)
// ад коллбэков, callback hell..
promise.then(() => {
}) // -> 'resolved' / 'fulfilled'
promise.catch(() => {
}) // -> 'rejected'
/*
fecth('https://google.com', (googleData)=> {
    const result = getGoogleResult(googleData)

    let firstResultData = null;
    let secondaryResultData = null;

    const processDataSuccessHandler = () => {

    }

    fetch(result[0], (dataFromIncubator)=>{
        firstResultData = dataFromIncubator
        if  (secondaryResultData){
            processData(firstResultData, secondaryResultData, processDataSuccessHandler)
        }
    })
    fetch(result[1], (dataFromHexlet)=>{
        secondaryResultData = dataFromHexlet
        if  (firstResultData){
            processData(firstResultData, secondaryResultData, processDataSuccessHandler)
        }
    })



})*/

function processData(data1, data2, callback) {


    fecth('https://google.com', (googleData) => {
        const result = getGoogleResult(googleData)


        const processDataSuccessHandler = () => {
            console.log('Data is ready')
        }

        fetch(result[0], (dataFromIncubator) => {
            //2
            fetch(result[1], (dataFromHexlet) => {
                processData(firstResultData, secondaryResultData, processDataSuccessHandler)
            })
        })


    })

    function processData(data1, data2, callback) {

    }
}