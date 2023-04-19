console.log("Start");

function longOperation(waitMS = 2000) {
    console.log("longOperation started")
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("longOperation finished")
            resolve(100)
        }, waitMS)
    })
}

let resultPromise = longOperation()
console.log(resultPromise)

resultPromise
    .then((result) => result * 2)
    .then(function (result2) {
        console.log("result2:", result2)
    }).catch(function (error) {
        console.error("Something happened", error)
    }).finally(function () {
        console.log("Finally")
    })

console.log("End");