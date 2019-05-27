function setStyle(args, {x, y}) {
    for (let key in args) {
        args[key].style.transform =`rotate(${57 * atang(x, y)}deg)`;
    }
}

function handler(e) {
    const objectElement = {
        eyeLeft: document.querySelector('.eye-left'),
        eyeRight: document.querySelector('.eye-right'),
    };

    const position = {
        x: e.clientX - objectElement.eyeLeft.getBoundingClientRect().left - 65,
        y: e.clientY - objectElement.eyeRight.getBoundingClientRect().top - 65,
    };

    setStyle(objectElement, position);
}

function atang(x, y) {
    switch (true) {
        case x > 0 && y > 0:
        case x < 0  && y > 0:
            return Math.PI / 2 - Math.atan(x / y);
        case x < 0 && y < 0:
            return Math.PI + Math.atan(y / x);
        default:
            return 3 * Math.PI / 2 + Math.abs(Math.atan(x / y));
    }
}

window.addEventListener('mousemove', handler);