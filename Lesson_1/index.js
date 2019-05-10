/// 1 ///

function makeGreetings(age) {
    var word = 'лет';

    if (age % 100 > 10 && age % 100 < 15) {
        word = 'лет'
    } else if (age % 10 === 1) {
        word = 'год'
    } else if (age % 10 > 1 && age % 10 < 5) {
        word = 'года'
    }
    return ('Мой возраст' + age + '' + word);
}

/// 2 ///

function splitArray (arr, num) {
    var result =[];
    if (Array.isArray(arr) || !num || num <1 ){
        return result
    }
    for (var i = 0; i < arr.length; i +=num){
        result.push(arr.slice(i, i + num));
    }
}

/// 3 ///

function add(a) {
    return function (b) {
        return a + b;
    }
}

/// 4 ///

function transformData (data){
   var result = {};
   for ( var i = 0; i < data.length; i +=1){
       if (data[i].mark > 5){
           result[data[i].login] = (data[i].firstName + '' + data[i].lastName).trim();
       }
   }
   return result;
}

/// 5 ///

function addInfinite(a) {
    function inner(b) {
        inner.result += b;
        return inner;
    }
    inner.result = a;
    return inner;
}









