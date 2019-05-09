/// 1 ///

function makeGreetings(age) {
    var txt;
    count = age % 100;
    if (count >= 5 && count <= 20) {
        txt = 'лет';
    } else {
        count = count % 10;
        if (count == 1) {
            txt = 'год';
        } else if (count >= 2 && count <= 4) {
            txt = 'года';
        } else {
            txt = 'лет';
        }
    }
    return txt;
}
alert('Мой возраст 21 ' + makeGreetings(21));

/// 2 ///

function splitArray (arr, size) {
    arr = [1, 4, 5, 6, 2];
    size= 2;
    return arr.map((x, i) => i % size == 0 && arr.slice(i, i + size)).filter(x => x)
}

/// 3 ///

var result1 = add(2)(3);
var result2 = add(4)(-1);

function add(x,y) {
    if (typeof y === 'undefined') {
        return function(y) {
            return x + y;
        }
    }
}

/// 4 ///

function transformData (data){
    var newObj = {};
    data.forEach(function(elem){
        if(!elem.mark || elem.mark <= 5) return;
        newObj[elem.login] = elem.firstName +' '+ elem.lastName;
    });
    return newObj;
}

/// 5 ///

function addInfinite(x) {
    return function(y) {
        if (typeof y !== 'undefined') {
            x = x + y;
            return arguments.callee;
        } else {
            return x;
        }
    };
}







