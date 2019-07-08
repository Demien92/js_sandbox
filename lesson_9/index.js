///1

function ColorBg() {
    let r = Math.random() * 255;
    let g = Math.random() * 255;
    let b = Math.random() * 255;
    return `rgb(${r}, ${g}, ${b})`;
}


function waitForScroll() {
    return new Promise(resolve => {
        window.addEventListener('scroll', resolve);
    });
}

function drawOnScroll() {
    waitForScroll().then(() => {
        let div = document.getElementById('block-wrapper');
        div.style.backgroundColor = ColorBg();
    });
}
drawOnScroll();

///2

function waitForAnswer() {
    return new Promise((resolve, rejects) => {
        window.addEventListener('keypress', (event) => {
            if(String.fromCharCode(event.which).toUpperCase() == 'Y') {
                resolve();
            } else if(String.fromCharCode(event.which).toUpperCase() == 'N' ) {
                rejects();
            }
        });
    });
}

function setText(info) {
    let div = document.getElementById('info');
    if(!div) {
        div = document.createElement('div');
        div.id = 'info';
    }
    div.innerHTML = info;
    div.style.position = 'absolute';
    div.style.top = '50px';
    div.style.left = '50px';
    document.body.append(div);
}
setText('Вы сделали домашнее задание? Y / N');
waitForAnswer()
    .then(() => setText('Так держать!'))
    .catch(() => setText('Нужно подтянуть('));


/////3


function waitForTime(s) {
    return new Promise(resolve => {
        setTimeout(resolve, s*2000, 'text');
    });
}

function waitForClicks(numb) {

}

