import { rejects } from "assert"

let promise = new Promise(function(resolve, reject){
    setTimeout(() => {
        resolve('작업 완료')
    }, 2000)
})

promise.then((message) => {
    console.log(message)
}).catch((error) => {
    console.log(error)
}).finally(() => console.log("Promise settled"))

function fetchDataP():  Promise<any> {
    return new Promise((resolve, reject) => {

    })
}

function getRandomPromise() {
    return new Promise<void>((resolve, reject) => {
        setTimeout(() => {
            const destiny = Math.random();
            if(destiny > 0.5) {
                resolve();
            }else {
                reject()
            }
        });
    })
}

getRandomPromise()
.then(() => {
    console.log('Promise was resolved')
}).catch(() => {
    console.log('promise was rejected')
})

let promiseChaining = new Promise<number>((resolve, rejects) => {
    setTimeout(() => resolve(1), 1000)
})
.then(result => {
    console.log(result)
    return result * 2;
})
.then(result => {
    console.log(result)
    return result * 3
})
.then(result => {
    console.log(result)
})

console.log(promiseChaining)