// 1
function func4(arr) {
    const result = [];
    let max = -Infinity;

    for (let i = 0; i < arr.length; i+=1) {
        max < arr[i] ? max = arr[i] : null;

        if (arr[i] < max) {
            result.push(max + arr[i]);
        } else {
            result.push(max + arr[i+1]);
        }
    }

    return result.filter(el => el).reduce((sum, item) => sum > item ? sum : item);
}

// 2
const result = [];

function func5(param) {
    for (let i = 0; i < param.length; i+=1) {
        func5(param[i]);
    }
    !param.length ? result.push(param) : null;

    return result;
}

// 3
function mask(value) {
    if (value.length > 6 && value.length <= 10) {
        return value.split('').join(' ').split(' ').reduce((sum, item) => sum.length < value.length - 4 ? sum + '*' : sum + item, '');
    }
}

// 4
function add(a = 0) {
    const func = b => {
        return add(a + b);
    };

    func.valueOf = () => a;

    return func;
}

console.log(+add(1)(2)(3));

