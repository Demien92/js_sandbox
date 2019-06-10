import Color from './color';

class MiniSlider {
    constructor(id) {
        this.iterator = 0;
        this.id = typeof id === 'string' ? id : '#container';

        this.hideAll();
        this.show(0, false);
        this.createButtons('button', ['control-button_prev', 'control-button_next']);
        MiniSlider.setAttribute(MiniSlider.query(`${this.id} .control`).children, ['control-prev','control-next']);
        MiniSlider.query(`${this.id}`).addEventListener('click', this.next.bind(this));
    }

    static setBorderColor(target) {
        target.style.borderColor = new Color().random().toString();
    }

    static query(node) {
        return document.querySelector(node);
    }

    static setAttribute(list, attr) {

        for (let i = 0; i < list.length; i+=1) {
            const value = list[i];
            value.setAttribute('id', attr[i]);
        }
    }

    loop(target, position) {
        this.iterator = position;
        this.hideAll();
        this.show(this.iterator);
    }

    hideAll(){
        const nodesImg = MiniSlider.query(`${this.id} .wrapper`).children;

        for (let val of nodesImg) {
            val.style.opacity = '0';
        }
    }

    show(index, showAll) {
        if (showAll) {

            for (let val of MiniSlider.query(`${this.id} .wrapper`).children) {
                val.style = '';
                val.classList.add('restore');
            }
            return;
        }

        MiniSlider.query(`${this.id} .wrapper`).children[index].style.opacity = '1';
    }

    createButtons(type, className) {
        for (let i = 0; i < 2; i+=1) {
            MiniSlider.query(`${this.id} .control`).appendChild(document.createElement(type)).className = className[i];
        }
    }

    next(event) {
        const target = event.target;
        const isButton = target.tagName === 'BUTTON';

        if (isButton && target.id === 'control-next') {
            if (this.iterator < MiniSlider.query(`${this.id} .wrapper`).children.length - 1) {
                this.hideAll();
                this.show(this.iterator+=1);
            } else {
                this.loop(target, 0);
            }
        } else {
            this.prev(target, isButton);
        }
        isButton ? MiniSlider.setBorderColor(target) : null;
    }

    prev(target, isButton) {
        if (isButton && target.id !== 'control-next') {
            if (this.iterator > 0) {
                this.hideAll();
                this.show(this.iterator-=1);
            } else {
                this.loop(target, MiniSlider.query(`${this.id} .wrapper`).children.length - 1);
            }
        }

        isButton ? MiniSlider.setBorderColor(target) : null;
    }

    destroy() {
        MiniSlider.query(`${this.id} .control`).remove();
        this.show(null, true);
    }
}