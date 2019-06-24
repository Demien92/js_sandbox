/// 1
const div = document.createElement('div');
document.body.append(div)
div.innerHTML = 'Нажмите для получения геолокации';

div.addEventListener('click', () => {
    foundIp()
        .then(res => look(res['ip']))
        .then(res => {
            div.innerHTML = `${res['data']['country']} ${res['data']['city']}`;
        });

});

function foundIp() {
    const promiseApi1 = fetch('https://ipapi.co/json/');
    const promiseApi2 = fetch('http://free.ipwhois.io/json/');
    const promiseApi3 = fetch('https://api.ipify.org?format=json');
    return Promise.race([promiseApi1, promiseApi2, promiseApi3])
        .then(res => {
            div.innerHTML = "поиск...";
            return res.json();
        })
        .catch(err => {
            div.innerHTML = "ошибка...";
        });
}

function look(ipStr) {
    return fetch(`https://api.jsonbin.io/g/${ipStr}`, {method: 'GET'})
        .then(res => res.json())
        .catch(err => {
            div.innerHTML = "ошибка локации...";
        });
}

///2

const SECRET_KEY = '$2a$10$V32hBzo1c461QCBxZwYx5eEa53DGMdjZmdnXL/Wk6.s.xicCUAYvm/6';
const bin_id = '5d0d19e34788e310f6ccea9b';

function postData(data) {
    return fetch ('https://api.jsonbin.io/b', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'secret-key': SECRET_KEY,
            'private': 'true',
        },
        body: JSON.stringify(data),
    });
}
window.postData = postData;

function getData(id) {
    return fetch (`https://api.jsonbin.io/b/${id}/latest`, {
        method: 'GET',
        headers: {
            'secret-key': SECRET_KEY,
        },
    })
        .then(response => response.json());
}
window.getData = getData;

function updateData(id, data) {
    return fetch (`https://api.jsonbin.io/b/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'secret-key': SECRET_KEY,
        },
        body: JSON.stringify(data),
    });
}
window.updateData = updateData;

function deleteData(id) {
    return fetch (`https://api.jsonbin.io/b/${id}`, {
        method: 'DELETE',
        headers: {
            'secret-key': SECRET_KEY,
        },
    });
}

window.deleteData = deleteData;

const divPart2 = document.createElement('div');
document.body.append(divPart2);
const input = document.createElement('input');
input.type = 'text';
divPart2.append(input);
const button = document.createElement('button');
button.innerHTML = 'Добавить';
divPart2.append(button);
const message = document.createElement('div');
divPart2.append(message);
const ul = document.createElement('ul');
divPart2.append(div);
