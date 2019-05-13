/// 1 ///

function removeKeys(a, b) {
    var obj = {};
    for (var el in a) {
        var arr = b.filter(function (key ){
            return key === el;
        });
        if(arr.length === 0) {
            obj[el] = a[el];
        }
    }
    return obj;
}
// console.log(removeKeys({ a: 1, b: [], c: '' }, ['a', 'c']));

/// 2 ///

// var ar = ([[1,"a",()=>{}],[{}, 2, 3],[null, -3, 'q']]);

var arr2 = ar.map(function ( num){
    return num.filter(function(number) {
        return typeof number === 'number'
    });

});

/// 3 ///

// var result = reverse('123', '456');

function reverse() {
    var args = Array.prototype.slice.call(arguments, reverse.length);
    return args.map(function(el) {
        return el.split('').reverse().join('');
    }).reverse();
}

/// 4 ///
