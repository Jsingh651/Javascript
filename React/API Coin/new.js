function tossCoin() {
    return Math.random() > 0.5 ? "heads" : "tails";
}
function fiveHeads() {
    return new Promise((resolve, reject) => {
        let headsCount = 0;
        let attempts = 0;
        while (headsCount < 5) {
            attempts++;
            let result = tossCoin();
            console.log(`${result} was flipped`);
            if (attempts >= 100 ){
                reject("It flipped more then a 100 times. Error")
                headsCount = 5
            }
            if (result === "heads") {
                headsCount++;
            } else {
                headsCount = 0;
            }
            if (headsCount == 5){
                resolve("It flipped more then 5 times. Sucess")
            }
        }
    });
}
fiveHeads()
    .then(res => console.log(res))
    .catch(err => console.log(err));




