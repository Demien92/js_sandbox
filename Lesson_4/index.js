// 1 Создать функцию makeImages, которая принимает бесконечное количество аргументов - ссылок на изображения, и должна создать для каждой ссылки тег img, с соответствующим адресом, и добавить в body обернутой каждую в свой div. Пример:
// makeImages('./img_1.png', './img_2.png', './img_3.png');
// Результат должен получиться следующий:
//     <body>
// <script src="index.js"></script>
//     <div><img src="./img_1.png"></div>
//     <div><img src="./img_3.png"></div>
//     <div><img src="./img_3.png"></div>
//     </body>
//
function createElement(parent, child, url) {
    let isAdded = false;
    const tree = {
        container: document.createElement(parent),
        img: document.createElement(child),
    };

    for (let key in tree) {

        if (tree[key].tagName === parent.toUpperCase()) {
            document.body.appendChild(tree[key]);
            isAdded = true;
        } else {
            isAdded ? document.body.lastElementChild.appendChild(tree[key]) : null;
            tree[key].src = url;
        }
    }
}

function makeImages(...args) {
    for (let i = 0; i < args.length; i+=1) {
        if (typeof args[i] === 'string' && args[i] !== '') {
            createElement('div', 'img', args[i]);
        }
    }
}


// Создать класс FormBuilder, который имеет следующие методы:
//     В конструкторе создает свой собственный элемент form, но не добавляет его никуда
// appendTo(target), где target - html элемент, добавляет свой элемент form внутрь элемента target
// addInput(name) - создает элемент input с типом text, атрибутом “name”=name и ложит его внутрь form
// addCheckbox(name) - создает элемент input с типом checkbox, атрибутом “name”=name и ложит его внутрь form
// addButton(name) - создает элемент button, текстом name и ложит его внутрь form
// destroy() - убирает элемент form из html, Подсказка: parentElement, removeChild
// Под form, везде имеется один и тот же элемент созданный в конструкторе
//2

class FormBuilder {
    constructor() {
        this.form = document.createElement('form');
    }

    static _createElement(attr, type, text) {
        const createElement = document.createElement(type);
        createElement.tagName === 'BUTTON' ? createElement.textContent = text : null;

        for (let key in attr) {
            createElement.setAttribute(key, attr[key]);
        }

        return createElement;
    }

    appendTo(target) {
        const isNodeElement = target && target.nodeType === Node.ELEMENT_NODE;

        if (isNodeElement) {
            target.appendChild(this.form);
        }
    }

    static valid(param, type) {
        if (typeof param === 'string' && param !== '') {
            return param;
        } else {
            return type !== 'button' ? '' : 'button';
        }
    }

    addInput(name = '') {
        this.form.appendChild(FormBuilder._createElement({type:'text', name: FormBuilder.valid(name, null)}, 'input', null));
    }

    addCheckbox(name = '') {
        this.form.appendChild(FormBuilder._createElement({type:'checkbox', name: FormBuilder.valid(name, null)}, 'input', null));
    }

    addButton(name = 'button') {
        this.form.appendChild(FormBuilder._createElement({}, 'button', FormBuilder.valid(name, 'button')));
    }

    destroy() {
        this.form.parentElement.removeChild(this.form);
    }
}