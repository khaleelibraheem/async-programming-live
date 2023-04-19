console.log("Start")


function longOperation(waitMS=2000){
    console.log("longOperation start");
    let waitUntil = new Date(new Date().getTime() + waitMS);
    while(new Date < waitUntil){
        // do nothing
    }
    console.log("longOperation end");
}

longOperation(5000);

console.log("End");


// let waitUntil = new Date(new Date().getTime() + 2000);
// let wait = new Date(new Date().getTime());
// let wait2 = new Date();
// let wait3 = new Date().getTime();
// let wait4 = new Date(1681287780110);
// console.log(waitUntil)
// console.log(wait)
// console.log(wait2)
// console.log(wait3)
// console.log(wait4)