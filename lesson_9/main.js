// function onEnd() {
//     console.log('end');
// }
// onEnd();
// setTimeout(onEnd, 1000);
// console.log('5');
// console.log('10');

// function calculate(cb) {
//     const sum = 2 + 0.3;
//
//     function onClick(){
//         cb(sum);
//         window.removeEventListener('click', onClick)
//     }
//     window.addEventListener('click', onClick );
// }
// calculate(res => console.log(res));
//
// ///
//
// tpm = new Promise((resolve, reject) =>{
//     setTimeout(resolve, 3000);
// });
// console.log('1');
//
// tpm.then(() => console.log('promise resolved'))
//     .then(() => console.log('promise resolved 1'))
//     .then(() => console.log('promise resolved 2'));
//
// console.log('2');
//
// function waitForTime(ms) {
//     return new Promise((resolve ) => {
//         setTimeout(resolve, ms)
//     })
// }
//
// function waitForClick() {
//     return new Promise((resolve ) => {
//         window.addEventListener('click', resolve)
//
//     })
// }
//
// waitForClick()
//     .then(() => console.log('sereously'))
//     .then(waitForClick)
//     .then(() => waitForTime(3000))
//     .then(waitForClick)
//     .then(() => console.log('oyu are crazy'));



function alwaysReject() {
    return new Promise((resolve, reject ) => {
        setTimeout(Math.random() > 0.6 ? resolve : reject, 1000)

    })
}

alwaysReject()
    .then(() => console.log("yes yes yes"))
    .then(() => console.log("222 222 222"))
    .catch(() => console.log("no no no"))
    .then(() => console.log("after"));