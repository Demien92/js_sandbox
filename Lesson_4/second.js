///2
function print(quantity) {
    let result = '';
    let j = quantity + quantity;

    for (let i = 1; i <= quantity; i+=1) {
        let strStart = new Array(i).join(' ') + '*';
        let strEnd =  new Array(j-=2).join(' ') + '*';
        strEnd = j === 0 ? '': strEnd;
        result += `\n${strStart + strEnd}${i >= quantity ? '\n': ''}`;

    }
    return `${result}`;
}
function upper(quantity, string) {
    for (let i = 1; i < quantity; i += 1) {
        for (let k = quantity - i; k > 0; k -= 1) {
            string += ' ';
        }
        string += '*';
        for (let j = ((i-2)*2+1); j >= 1; j -= 1) {
            string += ' ';
            if (j === 1){
                string += '*';
            }
        }
        for (let k = quantity - i; k > 0; k -= 1) {
            string += ' ';
        }
        for (let k = quantity - i; k > 0; k -= 1) {
            string += ' ';
        }
        string += '*';
        for (let j = ((i-2)*2+1); j >= 1; j -= 1) {
            string += ' ';
            if (j === 1){
                string += '*';
            }
        }
        string += '\n';
    }

    return lover(quantity, string);
}
function lover(quantity, string) {
    for (let i = quantity; i > 0; i -= 1) {
        for (let k = quantity - i; k > 0; k -= 1) {
            string += ' ';
        }
        string += '*';
        for (let j = ((i-2)*2+1); j >= 1; j -= 1) {
            string += ' ';
            if (j === 1){
                string += '*';
            }
        }
        for (let k = quantity - i; k > 0; k -= 1) {
            string += ' ';
        }
        for (let k = quantity - i; k > 0; k -= 1) {
            string += ' ';
        }
        string += '*';
        for (let j = ((i-2)*2+1); j >= 1; j -= 1) {
            string += ' ';
            if (j === 1){
                string += '*';
            }
        }
        string += '\n';
    }

    return string;
}
function print2(quantity) {
    let string = '\n';
    string += upper(quantity, string);

    return string;
}
///3
const exit = val => val === 'exit';
const dialog = text => prompt(text, '');
const recordHistory = (val, storage) => storage.history.push(val);
function reiteration(setters, text) {
    while (!Number(Number.isFinite(setters.value)) && setters.value !== 'exit') {
        setters.setValue = dialog(text);
    }
}
function calculate(storage = { history: [], formula: '', args: {} }) {
    const manual = 'Введите 1, если необходимо провести расчет формулы y = kx + b. Ведите 2, если необходимо провести расчет формулы y = x^2. Введите exit, если необходимо закончить расчеты';
    const params = { k: null, x: null, b: null };
    const param = { x: null };
    const setters = {
        value: null,
        set setValue(val) {
            this.value = val >= 0 || val <= 0 ? parseInt(val) : val;
            recordHistory(val, storage);
        },
        results({k, x, b}) {
            const length = Object.keys(arguments[0]).length;
            if (length > 1) {
                return k * x + b;
            }
            return Math.pow(x, 2);
        },
    };
    setters.setValue = dialog(manual);

    if (exit(setters.value)) {
        return storage;
    }

    switch (setters.value) {
        case 1:
            setters.setValue = dialog(`Введите k для расчета функции y = kx + b. Введите exit, если необходимо закончить расчеты`);
            storage.formula = 'y = kx + b';

            for (let key in params) {

                params['k'] || params['k'] === 0 ? setters.setValue = dialog(`Введите ${key} для расчета функции y = kx + b. Введите exit, если необходимо закончить расчеты`): null;

                reiteration(setters, `Введите ${key} для расчета функции y = kx + b. Введите exit, если необходимо закончить расчеты`);

                if (exit(setters.value)) {
                    return storage;
                }

                params[key] = setters.value;storage.args[key] = params[key];
            }
            alert(setters.results(params));
            break;
        case 2:
            setters.setValue = dialog(`Введите x для расчета функции y = x^2. Введите exit, если необходимо закончить расчеты`);
            storage.formula = 'y = x^2';

            reiteration(setters, 'Введите x для расчета функции y = x^2. Введите exit, если необходимо закончить расчеты');

            if (exit(setters.value)) {
                return storage;
            }

            param.x = setters.value;storage.args = {...param};
            alert(setters.results(param));
            break;
    }

    return calculate(storage);
}