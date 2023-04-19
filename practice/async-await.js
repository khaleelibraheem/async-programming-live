console.log("Start");

function longOperation(waitMS = 2000) {
    console.log("longOperation started")
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("longOperation finished")
            reject(100)
        }, waitMS)
    })
}

async function main() {
    try {
        let resultPromise = longOperation(500);
        let result = await resultPromise;
        console.log("result:", result);
        let result2 = await longOperation(1000);
        console.log("result2:", result2);
    } catch(error) {
        console.log("Some error happened:", error)
    } finally {
        console.log("Finally Called")
    }
}



main()
console.log("End")