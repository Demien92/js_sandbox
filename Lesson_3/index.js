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

/// 2 ///

var arr2 = ar.map(function ( num){
    return num.filter(function(number) {
        return typeof number === 'number'
    });

});

/// 3 ///

function reverse() {
    var args = Array.prototype.slice.call(arguments, reverse.length);
    return args.map(function(el) {
        return el.split('').reverse().join('');
    }).reverse();
}

/// 4 ///
