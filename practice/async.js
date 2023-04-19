console.log("Start")

function longOperation(waitMS=2000){
    console.log("longOperation started")
    setTimeout(function(){
        console.log("longOperation finished")
    }, waitMS)
}


longOperation()
console.log("End")
