// // postData ({lesson_11: true, mood: 'Perfect'}) .then(res => console.log(res)) .catch(err => console.log(err))
//
// const SECRET_KEY = '$2a$10$V32hBzo1c461QCBxZwYx5eEa53DGMdjZmdnXL/Wk6.s.xicCUAYvm';
//
// function postData(data) {
//     return fetch('https://api.jsonbin.io/b', {
//         method : 'POST',
//         headers:{
//             'Content-type' : 'application/json',
//             'secret-key' : SECRET_KEY,
//             'private' : 'true',
//         },
//         body : JSON.stringify(data),
//     });
// }
//
// function getData(id) {
//     return fetch(`https://api.jsonbin.io/b/${id}/latest`, {
//         method : 'GET',
//         headers:{
//             'secret-key' : SECRET_KEY,
//         },
//     })
//     .then(response => response.json());
// }
//
// function updateData(id,data) {
//     return fetch(`https://api.jsonbin.io/b/${id}`, {
//         method : 'PUT',
//         headers:{
//             'Content-type' : 'application/json',
//             'secret-key' : SECRET_KEY,
//         },
//         body : JSON.stringify(data),
//     });
// }
//
// function deleteData(id) {
//     return fetch(`https://api.jsonbin.io/b/${id}`, {
//         method : 'DELETE',
//         headers:{
//             'secret-key' : SECRET_KEY,
//         },
//     });
// }
//
// window.postData = postData;
// window.getData = getData;
// window.updateData = updateData;
// window.deleteData = deleteData;

// function timeout(delay, arg) {
//     return new Promise ((resolve) =>{
//         setTimeout(() => resolve(arg), delay);
//     })
// }
//
// function fail(delay, arg) {
//     return new Promise ((resolve, reject) =>{
//         setTimeout(() => reject(arg), delay);
//     })
// }
//
// // timeout( 1000).then(() => console.log('1'));
// Promise.all([
//     timeout(500, 1),
//     timeout(2500, 'hello'),
//     fail(100, () => null),
// ])
//     .then(result => console.log(result))
//     .catch(err => console.log(err));



